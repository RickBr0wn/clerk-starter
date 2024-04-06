import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({ publicRoutes: ['/'] })

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
}

// Path: middleware.ts
// Created at: 21:37:53 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
