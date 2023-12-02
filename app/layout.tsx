import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'PriceWise',
  description: 'Realice un seguimiento de los precios de los productos sin esfuerzo y ahorre dinero en sus compras en línea.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10x1 mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
