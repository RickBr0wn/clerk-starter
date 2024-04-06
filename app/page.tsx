import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Card, CardDescription, CardTitle } from '~/components/ui/card'
import { log } from '~/lib/utils'

export default function Home() {
  const { userId } = auth()

  return (
    <main>
      <Card className="py-10 px-6 max-w-[500px] mx-auto">
        <CardTitle className="text-2xl font-bold">
          🏠 NextClerkTemplate
        </CardTitle>
        <CardDescription>
          Revolutionize your web development workflow with Next.js 14,
          Shadcn/UI, and Clerk Authentication - power, simplicity, and security
          combined!
          {!userId && (
            <div className="flex w-full mt-6 gap-4">
              <Link href="/dashboard" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full uppercase border border-green-500 text-green-500"
                >
                  sign up
                </Button>
              </Link>
              <Link href="/dashboard" className="w-full">
                <Button className="w-full uppercase">log in</Button>
              </Link>
            </div>
          )}
        </CardDescription>
      </Card>
    </main>
  )
}

// Path: app/page.tsx
// Language: Typescript
// Framework: React/Next.js
