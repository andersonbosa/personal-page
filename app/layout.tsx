import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Navbar from '@/components/molecules/Navbar'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anderson Bosa | Software Engineer - Penetration Tester - Bachelor in Information Systems",
  description: "Anderson has been an active software engineer since 2019. Enthusiast at Leadership, Ethical Hacking and Red Teams Operations, Anderson seeks excellence in his career by focusing on interdisciplinary learning.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout (
  {
    children,
  }: Readonly<RootLayoutProps>
) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
