import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Navbar from '@/components/molecules/Navbar'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anderson Bosa | Software Engineer - Penetration Tester - Bachelor in Information Systems",
  description: "Anderson has been an active software engineer since 2019. Enthusiast at Leadership, Ethical Hacking and Red Teams Operations, Anderson seeks excellence in his career by focusing on interdisciplinary learning.",
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
