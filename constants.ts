import { Theme } from '@/contexts/ThemeContext'
import { LanguageItem } from '@/types'
import appConfiguration from './config'


export const INITIAL_LIGHT_THEME_STATE: Theme = appConfiguration.themes.options.light
export const INITIAL_DARK_THEME_STATE: Theme = appConfiguration.themes.options.dark

export const AVAILABLE_PICKER_THEMES = [
  'light', 'retro', 'dracula', 'dark'
]

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

interface MyContact {
  label: string
  lucideIcon: string
  contact: string
  hrefBuilder: (input: any) => string
}

export const MY_CONTACTS: MyContact[] = [
  {
    label: 'Email',
    lucideIcon: 'Mail',
    contact: 'andersonbosa0@gmail.com',
    hrefBuilder: (emailAddress: string) => `mailto://${emailAddress}`,
  },
  {
    label: 'Linkedin',
    lucideIcon: 'Linkedin',
    contact: 'andersonbosa',
    hrefBuilder: (username: string) => `https://linkedin.com/in/${username}`,
  },
  {
    label: 'GitHub',
    lucideIcon: 'Github',
    contact: 'andersonbosa',
    hrefBuilder: (username: string) => `https://github.com/${username}`,
  },
  {
    label: 'Twitter',
    lucideIcon: 'Twitter',
    contact: 't4inha',
    hrefBuilder: (username: string) => `https://twitter.com/${username}`,
  }
]
