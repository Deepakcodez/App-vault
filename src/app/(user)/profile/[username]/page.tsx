import { createCaller } from '@/trpc/trpc-server/caller';
import Image from 'next/image'
import React, { Suspense } from 'react'


export default function ProfilePage({ params }: PageProps<"/profile/[username]">) {
  return (
    <div className='min-h-screen py-28 max-w-4xl mx-auto '>
      <Suspense fallback={<div>Loading...</div>}>
        {params.then(({ username }) => (
          <Content username={username} />
        ))}
      </Suspense>
    </div>
  )
}


async function Content({ username }: { username: string }) {
  const trpc = createCaller();
  const user = await trpc.hello({ name: username });
  return (
    <section className='p-4'>
      <div className='flex items-center gap-4'>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/138669669?v=4"
            alt="avatar"
            width={100}
            height={100}
            className='rounded-full'
          />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{username.slice(3)}</h1>
          <p className='text-sm text-neutral-400'>@{username.slice(3)}</p>
          <p>{user.greeting}</p>
        </div>
      </div>
    </section>
  )
}