import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/signup-form"
import Link from "next/link"
import { Suspense } from "react"
import UserNamePanel from "@/features/auth/components/UserNamePanel"


export default function SignupPage() {
  return (
    <div className="relative bg-neutral-900 grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium text-white">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Dev Desk
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className=" relative hidden lg:block">
        <img
          src="https://cdn.macstories.net/icons1529553323730-1637678424734.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <Suspense>
        <UserNamePanel />
      </Suspense>
    </div>
  )
}
