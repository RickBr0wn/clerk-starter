import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  )
}

// Path: app/sign-in/[[...sign-in]]/page.tsx
// Created at: 21:40:48 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
