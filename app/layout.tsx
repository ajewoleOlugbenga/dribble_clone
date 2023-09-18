import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Dribble_clone',
  description: 'Dribble_clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
