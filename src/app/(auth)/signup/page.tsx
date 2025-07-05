"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { registerUserAction } from "@/lib/actiions/auth/auth";

// Define validation schema with Zod
const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();
  
  const onSubmit = async (data: SignUpFormData) => {
    try {
      // const resp = await axios.post("/api/user", { data });
      // console.log(resp);
      // if (resp.status === 200) {
      //   router.push("/");
      // }
      await registerUserAction(data)
      reset();
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Create Developer Account
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-300">
          Or{" "}
          <Link
            href="/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-transparent backdrop-blur-lg border border-neutral-700 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className={`appearance-none block w-full px-3 py-2 bg-neutral-800 border ${
                    errors.name ? "border-red-500" : "border-neutral-600"
                  } rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white sm:text-sm`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className={`appearance-none block w-full px-3 py-2 bg-neutral-800 border ${
                    errors.email ? "border-red-500" : "border-neutral-600"
                  } rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white sm:text-sm`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  {...register("password")}
                  className={`appearance-none block w-full px-3 py-2 bg-neutral-800 border ${
                    errors.password ? "border-red-500" : "border-neutral-600"
                  } rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white sm:text-sm`}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-2 text-xs text-neutral-400">
                <p>Password must contain:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li
                    className={
                      errors.password?.message?.includes("8 characters")
                        ? "text-red-400"
                        : "text-neutral-400"
                    }
                  >
                    At least 8 characters
                  </li>
                  <li
                    className={
                      errors.password?.message?.includes("uppercase")
                        ? "text-red-400"
                        : "text-neutral-400"
                    }
                  >
                    One uppercase letter
                  </li>
                  <li
                    className={
                      errors.password?.message?.includes("lowercase")
                        ? "text-red-400"
                        : "text-neutral-400"
                    }
                  >
                    One lowercase letter
                  </li>
                  <li
                    className={
                      errors.password?.message?.includes("number")
                        ? "text-red-400"
                        : "text-neutral-400"
                    }
                  >
                    One number
                  </li>
                  <li
                    className={
                      errors.password?.message?.includes("special character")
                        ? "text-red-400"
                        : "text-neutral-400"
                    }
                  >
                    One special character
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Creating account..." : "Sign up"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2  text-neutral-400 bg-[#272727]">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-sm font-medium text-white hover:bg-neutral-700"
                >
                  <span className="sr-only">Sign in with Google</span>
                <FcGoogle size={25}/>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-sm font-medium text-white hover:bg-neutral-700"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <FaGithub size={25}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
