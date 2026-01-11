import { Button } from '@/components/ui/button'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_user/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  return <div>Hello "/_user/user   "

    <Button onClick={() => navigate({ to: '/profile' })}>
      Profile
    </Button>
  </div>
}
