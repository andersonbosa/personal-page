import { Theme } from '@/contexts/ThemeContext'
import { LanguageItem } from '@/types'

export const INITIAL_LIGHT_THEME_STATE: Theme = 'pastel'
export const INITIAL_DARK_THEME_STATE: Theme = 'dracula'

export const AVAIABLE_LANGUAGES: LanguageItem[] = [
  {
    id: 'en-us',
    label: 'English',
    icon: 'usa',
    default: true
  },
  {
    id: 'it',
    label: 'Italian',
    icon: 'italy',
  },
  {
    id: 'pt-br',
    label: 'Portuguese',
    icon: 'brazil',
  },
]

export const AVAILABLE_THEMES = [
  'pastel', 'retro', 'dracula', 'dark'
]
