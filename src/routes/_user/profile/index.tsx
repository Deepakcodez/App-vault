import { ProfileContent } from '@/components/profilecontent'
import { getSessionFn } from '@/lib/serverfn'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense, use } from 'react'

export const Route = createFileRoute('/_user/profile/')({
  component: RouteComponent,
  loader: () => ({ itemPromise: getSessionFn() })
})

function RouteComponent() {
  const { itemPromise } = Route.useLoaderData()
  return <div>
    <p>profile section</p>
    <Suspense fallback={<h1>loadinggg.......</h1>}>
      <ProfileContent itemPromise={itemPromise} />
    </Suspense>
  </div>
}
