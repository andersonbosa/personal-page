import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainProviders from '@/contexts/Providers'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ }: Omit<RootLayoutProps, 'children'>): Promise<Metadata> {
  return {
    title: 'Anderson Bosa | Software Engineer - Penetration Tester - Bachelor in Information Systems',
    description: 'Anderson has been an active software engineer since 2019. Enthusiast at Leadership, Ethical Hacking and Red Teams Operations, Anderson seeks excellence in his career by focusing on interdisciplinary learning.',
  }
}

export default function LocaleLayout(
  {
    children,
    params: { locale }
  }: Readonly<RootLayoutProps>
) {

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-base-100 text-base-content`}>
        <MainProviders>
          {/* <ConfigFloatingButton /> */}
          {children}
          <Analytics />
        </MainProviders>
      </body>
    </html>
  )
}
