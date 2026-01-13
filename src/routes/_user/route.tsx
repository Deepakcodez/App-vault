import Navbar from '@/components/shared/Navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_user')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar />
    <Outlet />
  </div>
}
