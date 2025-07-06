"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLoginButtons() {
  const signInWithSocial = async (provider: "google" | "github") => {
    await authClient.signIn.social({
      provider: provider,
    });
  };

  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <div>
        <button
          onClick={() => signInWithSocial("google")}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <FcGoogle className="h-5 w-5" />
          <span className="ml-2">Google</span>
        </button>
      </div>

      <div>
        <button
          onClick={() => signInWithSocial("github")}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <FaGithub className="h-5 w-5" />
          <span className="ml-2">GitHub</span>
        </button>
      </div>
    </div>
  );
}
