import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '~/components/ui/card'
import Link from 'next/link'
// import { headers } from 'next/headers'
import { Button } from '~/components/ui/button'

type Quote = {
  text: string
  author: string
}

export default async function NotFound() {
  // const headersList = headers()
  // const domain = headersList.get('host')

  const getQuote = async (): Promise<Quote> => {
    const response = await fetch('https://type.fit/api/quotes')
    const data: Quote[] = await response.json()
    const maxNumber = data.length
    const randomNumber = Math.floor(Math.random() * (maxNumber - 0 + 1)) + 0
    return data[randomNumber]
  }

  const { text, author } = await getQuote()

  const editedAuthor: string = author.split(',')[0]

  return (
    <Card className="pt-10 pb-4 px-6 max-w-[500px] mx-auto text-center">
      <CardTitle className="text-2xl font-bold">404 - page not found</CardTitle>
      <CardDescription>Could not find requested resource</CardDescription>
      <CardDescription className="mt-8 text-xs">{text}..</CardDescription>
      <CardDescription className="text-xs opacity-50">
        {editedAuthor}.
      </CardDescription>
      <CardContent className="mt-6">
        <Link href="/dashboard">
          <Button className="w-full">Back to dashboard</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

// Path: app/not-found.tsx
// Created at: 21:55:37 - 04/04/2024
// Language: Typescript
// Framework: React/Next.js
