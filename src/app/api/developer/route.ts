import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { data:{name, email, password}} = await req.json();
    console.log(name)
    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new developer in the database
    await prisma.developer.create({
      data: {
        dev_name: name,
        dev_email: email,
        dev_password: hashedPassword,
        dev_avatar: "",
        dev_phone: "",
        dev_resume: "",
      },
    });
    return NextResponse.json(
      {
        message: "developer created",
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
