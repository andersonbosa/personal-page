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
