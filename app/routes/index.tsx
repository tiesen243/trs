import { createFileRoute, Link } from '@tanstack/react-router'

import { db } from '@/lib/db'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  loader: async () => {
    const data = await db.post.findMany()
    return data
  },

  component: () => {
    const data = Route.useLoaderData()
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>

        <Button asChild>
          <Link to="/actions/create-post">Create Post</Link>
        </Button>

        <ul className="grid grid-cols-3 gap-4">
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  },
})
