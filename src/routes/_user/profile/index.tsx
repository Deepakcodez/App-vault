import { ProfileContent } from '@/components/profilecontent'
import { getSessionFn } from '@/services/serverfn';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense, } from 'react'

export const Route = createFileRoute('/_user/profile/')({
  component: RouteComponent,
  loader: async () => {
    return {
      unResolvedSession: getSessionFn() 
    }
  },
  errorComponent: ErrorComponent
  // staleTime: 60_000,
})

function RouteComponent() {
  const {unResolvedSession} = Route.useLoaderData() 
  return <div>
    <p>profile section</p>
    <Suspense fallback={<h1>loadinggg.......</h1>}>
      <ProfileContent itemPromise={unResolvedSession} />
    </Suspense>
  </div>
}


function ErrorComponent() {
  // You can customize this UI however you want
  return (
    <div style={{ padding: 20 }}>
      <h1>No Session Found ❌</h1>
      <p>Please login to access your profile.</p>
    </div>
  )
}
