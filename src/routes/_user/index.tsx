import { Button } from '@/components/pages/ui/button'
import { createFileRoute, Link, } from '@tanstack/react-router'

export const Route = createFileRoute('/_user/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Hero page</h1>

    <Link to="/profile">
      <Button>
        Go to Profile
      </Button>
    </Link>
  </div>
}
