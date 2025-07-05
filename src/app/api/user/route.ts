import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import db from "../../../../prisma/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body.data || {};

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing fields", success: false },
        { status: 400 }
      );
    }

    const authResponse = await auth.api.signUpEmail({
      body: { email, password, name },
    });
   console.log(authResponse);
   
    // Optionally: Add user to Prisma DB
    // await db.user.create({
    //   data: {
    //     name,
    //     email,
    //     emailVerified: false,
    //     role: "USER",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // });

    return NextResponse.json(
      {
        message: "Developer created",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Signup Error]:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
