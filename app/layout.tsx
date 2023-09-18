import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
      <body>
        <Navbar/>
        <main>
          {children}
          </main>
        <Footer/>
        </body>
    </html>
  )
}
