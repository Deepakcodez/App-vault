"use server";

import { auth } from "@/lib/auth";

export async function registerUserAction(data) {
  try {
    await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: `${data.name} `,
      },
    });
  } catch (error) {
    return({
        success: false,
        message:"something went wrong",
        error
    })
  }
}
