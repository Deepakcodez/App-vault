import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import GithubButton from "@/features/auth/components/GithubButton"
import GoogleButton from "@/features/auth/components/GoogleButton"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn(" flex flex-col items-center gap-6 ", className)} {...props}>
      <Card className="bg-neutral-800 border border-neutral-700 w-full ">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">Continue with</CardTitle>

        </CardHeader>
        <CardContent className="space-y-4">

          <GithubButton className="w-full py-6 md:text-lg" iconsClassName="md:size-6 size-4" />
          <GoogleButton className="w-full py-6 md:text-lg" iconsClassName="md:size-6 size-4" />
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
