import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Define the router context type
export interface RouterContext {
  session?: {
    user: {
      id: string
      name: string
      email: string
      image?: string
    }
    session: {
      id: string
      userId: string
      expiresAt: Date
    }
  }
}

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {} as RouterContext,
    defaultNotFoundComponent: () => <div>Not Found</div>,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
