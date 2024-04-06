'use client'

import { type ReactNode } from 'react'

import { TooltipProvider } from './ui/tooltip'
import { useTheme } from 'next-themes'
import ClerkProvider from './clerk-provider'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const { resolvedTheme } = useTheme()

  return (
    <ClerkProvider theme={resolvedTheme as string}>
      <TooltipProvider>{children}</TooltipProvider>
    </ClerkProvider>
  )
}

// Path: components/providers.tsx
// Created at: 14:26:50 - 05/04/2024
// Language: Typescript
// Framework: React/Next.js
