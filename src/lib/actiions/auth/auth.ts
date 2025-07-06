"use server";

import { loginCredentialT } from "@/app/(auth)/login/page";
import { SignUpFormData } from "@/app/(auth)/signup/page";
import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function loginUserAction(data:loginCredentialT) {
  try {
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });

    return ({
      success: true,
      message:"user login",
      status:"OK"
    }
    )
  } catch (error) {
    if (error instanceof APIError) {
      console.log(error.message, error.status);
      if (error.status === "UNPROCESSABLE_ENTITY") {
        return {
          success: false,
          data: null,
          error: error.message,
          status: error.status,
        };
      }
    }
    return {
      success: false,
      data: null,
      error: "Something went wrong",
    };
  }
}


export async function registerUserAction(data:SignUpFormData) {
  try {
    await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: `${data.name} `,
      },
    });
     return ({
      success: true,
      message:"user created",
      status:"OK"
    }
    )
  } catch (error) {
    if (error instanceof APIError) {
      console.log(error.message, error.status);
      if (error.status === "UNPROCESSABLE_ENTITY") {
        return {
          success: false,
          data: null,
          error: error.message,
          status: error.status,
        };
      }
    }
    return {
      success: false,
      data: null,
      error: "Something went wrong",
    };
  }
}
