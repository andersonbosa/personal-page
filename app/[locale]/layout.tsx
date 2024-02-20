import '@/styles/globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter } from 'next/font/google'

import Footer from '@/components/atoms/Footer'
import ConfigFloatingButton from '@/components/molecules/ConfigFloatingButton'
import Navbar from '@/components/molecules/Navbar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import StoreProvider from '../StoreProvider'

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
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-base-100 text-base-content`}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <Navbar />
              {children}
              <ConfigFloatingButton />
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
