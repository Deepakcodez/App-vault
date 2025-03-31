import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

const prisma = new PrismaClient();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { formData } = await req.json();
    const { appName, description, images, stack, features, repo, link, tutorial } = formData;

    // Type for Cloudinary upload result
    interface CloudinaryResult {
      secure_url: string;
      public_id: string;
    }

    // Upload images to Cloudinary
    const uploadedImages: CloudinaryResult[] = await Promise.all(
      images.map(async (image: { url: string }) => {
        const response = await fetch(image.url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // Convert to Readable stream
        const readableStream = new Readable();
        readableStream.push(buffer);
        readableStream.push(null); // Signals end of stream

        const result = await new Promise<CloudinaryResult>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "project_images" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result as CloudinaryResult);
            }
          );
          
          readableStream.pipe(uploadStream);
        });

        return {
          url: result.secure_url,
          public_id: result.public_id
        };
      })
    );

    // Create project in database
    const project = await prisma.project.create({
      data: {
        project_name: appName,
        project_description: description,
        tech_stack: stack,
        project_features: features,
        project_repo: repo,
        project_link: link,
        project_tutorial_link: tutorial,
        project_developer: {
          connect: { dev_id: "developer_id_here" } // Replace with actual developer ID
        },
        project_images: {
          create: uploadedImages.map(img => ({
            url: img.url,
            public_id: img.public_id
          }))
        }
      },
      include: {
        project_images: true
      }
    });

    return NextResponse.json(
      {
        message: "Project created successfully",
        success: true,
        project
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}