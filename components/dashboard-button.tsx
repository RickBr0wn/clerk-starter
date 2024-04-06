import Link from 'next/link'

import { DashboardIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export default function DashboardButton() {
  return (
    <Link href={'/dashboard'}>
      <Button variant="outline" size="icon">
        <DashboardIcon className="h-5 w-5" />
        <span className="sr-only">Go to developers github page</span>
      </Button>
    </Link>
  )
}

// Path: components/dashboard-button.tsx
// Created at: 21:52:14 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
