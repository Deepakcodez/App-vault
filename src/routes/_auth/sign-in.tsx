import { LoginForm } from '@/components/pages/auth/login-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex items-center justify-center min-h-screen p-4 md:p-8'>
    <LoginForm className='w-full max-w-4xl' />
  </div>
}
