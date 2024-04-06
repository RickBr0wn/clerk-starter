import { auth, currentUser } from '@clerk/nextjs'
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '~/components/ui/card'
// import { log } from '~/lib/utils'

export default async function Dashboard() {
  const { userId } = auth()
  const user = await currentUser()

  // log('~/app/dashboard/page.tsx', userId)
  // log('~/app/dashboard/page.tsx', { user })

  return (
    <main>
      <Card className="py-10 px-6 max-w-[500px] mx-auto">
        <CardTitle className="text-2xl font-bold">
          🔐 Hello {user?.firstName}
        </CardTitle>
        <CardDescription>
          This screen can only be seen if you have successfully authenticated.
        </CardDescription>
        <div className="text-xs text-center mt-6 flex-col">
          <p>USER ID</p>
          <p>{userId}</p>
        </div>
      </Card>
    </main>
  )
}

// Path: app/dashboard/page.tsx
// Created at: 21:59:30 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
