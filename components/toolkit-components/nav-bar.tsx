'use client'

import { UserButton, useAuth } from '@clerk/nextjs'
import DashboardButton from '../dashboard-button'
import ErrorButton from '../error-button'
import { DarkModeToggle } from './dark-mode-toggle'
import GithubButton from './github-button'
import HomeButton from './home-button'
import { log } from '~/lib/utils'

export default function NavBar() {
  const { isLoaded, userId } = useAuth()

  // log('~/components/toolkit-components/navbar.tsx', {
  //   isLoaded,
  //   userId,
  // })

  return (
    <nav className="flex justify-end p-2 gap-2">
      <HomeButton />
      {userId && isLoaded && (
        <>
          {/* <ErrorButton /> */}
          <DashboardButton />
        </>
      )}
      <GithubButton />
      <DarkModeToggle />
      <UserButton />
    </nav>
  )
}

// Path: components/toolkit-components/nav-bar.tsx
// Language: Typescript
// Framework: React/Next.js
