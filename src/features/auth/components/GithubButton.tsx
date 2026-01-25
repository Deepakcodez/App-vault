
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'


type Props = {}

export default function GithubButton({ }: Props) {
    const [isLoading, setIsLoading] = useState(false)

    //   const { data } = useSuspenseQuery(AuthQueryOptions)


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
        <div>
            <Button onClick={signInWithGithub}>
                {isLoading ? 'Loading...' : "Continue with GitHub"}
            </Button>
        </div>
    )
}