import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
}

export interface LanguageItem {
  id: string
  label: string
  icon: string
  default?: boolean
}

export type Locale = "en-us" | "pt-br"

export type i18nConfig = {
  locales: Locale[]
  defaultLocale: Locale
}
