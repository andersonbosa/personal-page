import { Theme } from '@/contexts/ThemeContext'
import { LanguageItem } from '@/types'

export const INITIAL_LIGHT_THEME_STATE: Theme = 'pastel'
export const INITIAL_DARK_THEME_STATE: Theme = 'dracula'

export const AVAIABLE_LANGUAGES: LanguageItem[] = [
  {
    id: 'en-US',
    label: 'English',
    icon: 'usa',
  },
  {
    id: 'pt-BR',
    label: 'Português',
    icon: 'brazil',
    default: true
  },
]

export const AVAILABLE_THEMES = [
  'pastel', 'retro', 'dracula', 'dark'
]
