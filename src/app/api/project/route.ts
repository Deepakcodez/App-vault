import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../../../lib/auth";
import { UploadMultiImage } from "../utils/ImageUploader";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const Auth = await getServerSession(NEXT_AUTH);
    if (!Auth?.user?.id) {
      return NextResponse.json(
        { message: "Unauthorized", success: false },
        { status: 401 }
      );
    }

    const formData = await req.formData();

    // Extract all form fields
    const appName = formData.get("appName") as string;
    const description = formData.get("description") as string;
    const stack = formData.get("stack") as string;
    const features = formData.get("features") as string;
    const repo = formData.get("repo") as string;
    const link = formData.get("link") as string;
    const tutorial = formData.get("tutorial") as string;

    // Get all image files
    const imageFiles = formData.getAll("images") as File[];

    // Upload images to Cloudinary
    const uploadedImages = await UploadMultiImage(imageFiles);

    // Create project with image references
    const project = await prisma.project.create({
      data: {
        project_name: appName,
        project_description: description,
        tech_stack: stack ? JSON.parse(stack) : [], // Parse stringified array
        project_icon: "ff", // Replace with actual icon logic
        project_features: features ? JSON.parse(features) : [], // Parse stringified array
        project_repo: repo,
        project_link: link,
        project_tutorial_link: tutorial,
        project_developer_id: Auth.user.id,
        project_images: {
          create: uploadedImages.map((img) => ({
            url: img.url,
            public_id: img.public_id,
          })),
        },
      },
      include: {
        project_images: true,
      },
    });

    return NextResponse.json({
      message: "Project created successfully",
      success: true,
      project,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
