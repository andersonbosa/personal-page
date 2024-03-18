import StoreProvider from '@/app/StoreProvider'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { NextIntlClientProvider, useMessages } from 'next-intl'

interface MainProvidersProps {
  children: React.ReactNode
}

const MainProviders: React.FC<MainProvidersProps> = ({ children }) => {
  const nextIntlMessages = useMessages()

  return (
    <NextIntlClientProvider messages={nextIntlMessages}>
      <StoreProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </StoreProvider>
    </NextIntlClientProvider>
  )
}

export default MainProviders
