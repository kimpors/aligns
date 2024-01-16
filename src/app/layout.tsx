import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Web Host',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        { children }
        <Footer />
      </body>
    </html>
  )
}
