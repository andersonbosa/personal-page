import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
}

export type LocaleID = "en-us" | "pt-br" | 'it'

export interface LanguageItem {
  id: LocaleID
  label: string
  icon: string
  default?: boolean
}

export type i18nConfig = {
  locales: string[]
  defaultLocale: LocaleID
}
