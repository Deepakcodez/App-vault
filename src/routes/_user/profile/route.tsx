import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_user/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1 className='text-2xl font-extrabold'>Profile</h1>
    <Outlet />
  </div>
}
