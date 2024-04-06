import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from './ui/button'

export default function ErrorButton() {
  return (
    <Link href={'http://localhost:3000/does_not_exist'}>
      <Button variant="outline" size="icon">
        <ExclamationTriangleIcon className="h-5 w-5" />
        <span className="sr-only">Go to developers github page</span>
      </Button>
    </Link>
  )
}

// Path: components/error-button.tsx
// Created at: 22:11:59 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
