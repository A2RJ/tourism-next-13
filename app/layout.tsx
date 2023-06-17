import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from "@/components/ui/Home/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travelin',
  description: "Let's traveling with us",
}

export type Children = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={`scroll-smooth ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
