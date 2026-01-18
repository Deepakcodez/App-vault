import { useState } from 'react'
import { authClient } from 'lib/auth-client';

import { Button } from '../pages/ui/button'
import { useSuspenseQuery } from '@tanstack/react-query';
import { AuthQueryOptions } from '@/query/query-options';
import Avatar from './Avatar';

type Props = {}

export default function NavbarAuth({ }: Props) {
  const [isLoading, setIsLoading] = useState(false)

  const { data } = useSuspenseQuery(AuthQueryOptions)


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


  console.log("user", data.data?.user)

  const user = data.data?.user

  return (
    <div>
      {
        !user ?
          <Button
            onClick={signInWithGithub}
            className='bg-green-500'>
            {isLoading ? 'Loading...' : "Continue with GitHub"}
          </Button>
          :
          <Avatar image={user?.image || ""} />
      }
    </div>
  )
}