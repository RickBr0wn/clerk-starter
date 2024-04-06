import Link from 'next/link'
import { Button } from '../ui/button'
import { HomeIcon } from '@radix-ui/react-icons'

export default function HomeButton() {
  return (
    <Link href={'/'}>
      <Button variant="outline" size="icon">
        <HomeIcon className="h-5 w-5" />
        <span className="sr-only">Go to developers github page</span>
      </Button>
    </Link>
  )
}

// Path: components/toolkit-components/home-button.tsx
// Created at: 21:50:17 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
