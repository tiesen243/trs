import { db } from '@/lib/db'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/actions/create-post')({
  loader: async () => {
    const post = await db.post.create({
      data: {
        title: 'Helo World',
        content: 'This is my first post',
      },
    })
    return post
  },
  component: () => {
    const post = Route.useLoaderData()
    Route.useNavigate()({ to: '/' })

    return <div>{post.title}</div>
  },
})
