import { cn } from "@/lib/utils"
import { Button } from "@/components/pages/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/pages/ui/card"
import { Github } from "lucide-react"
import { FieldDescription } from "@/components/pages/ui/field"
import { authClient } from "lib/auth-client"
import { useState } from "react"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {

  const [isLoading, setIsLoading] = useState(false)

  const signInWithGithub = async () => {
    console.log("clicked")
    await authClient.signIn.social(
      { provider: "github" },
      {
        onRequest: () => {
          setIsLoading(true)
        },
        onSuccess: () => {
          console.log("Success!")
          setIsLoading(false)
        },
        onError: (ctx) => {
          console.log("error", ctx)
          setIsLoading(false)
        },
      }
    )
  }

  return (
    <Card className={cn("w-full max-w-md shadow-xl", className)} {...props}>
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-3xl font-bold">
          Welcome to <span className="text-primary">AppVault</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Securely access your dashboard in one click.
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <Button
          type="button"
          onClick={signInWithGithub}
          disabled={isLoading}
          variant="outline"
          size="lg"
          className="w-full flex items-center gap-2 justify-center text-lg"
        >
          <Github className="w-5 h-5" />
          <span>
            {isLoading ? 'Loading...' : "Continue with GitHub"}
          </span>
        </Button>

        <div className="space-y-1 text-center">
          <FieldDescription>
            By signing in, you agree to our{" "}
            <a className="underline" href="#">Terms</a> and{" "}
            <a className="underline" href="#">Privacy Policy</a>.
          </FieldDescription>
        </div>
      </CardContent>
    </Card>
  )
}
