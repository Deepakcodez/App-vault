import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      dev_name,
      dev_email,
      dev_phone,
      dev_resume,
      dev_password,
      dev_avatar,
    } = await req.json();

    // Create a new developer in the database
    await prisma.developer.create({
      data: {
        dev_name,
        dev_email,
        dev_phone,
        dev_password,
        dev_resume,
        dev_avatar,
      },
    });
    return NextResponse.json(
      {
        message: "user created",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
