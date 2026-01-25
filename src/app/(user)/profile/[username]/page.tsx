import React, { Suspense } from 'react'


export default function ProfilePage({ params }: PageProps<"/profile/[username]">) {
    return (
        <div>
            <h1>User Profile</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {params.then(({ username }) => (
                    <Content username={username} />
                ))}
            </Suspense>
        </div>
    )
}

 
async function Content({ username }: { username: string }) {
  const res = await fetch(`https://api.vercel.app/blog/${username}`)
  const post = await res.json()
 
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}