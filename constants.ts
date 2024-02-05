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

interface MyContact {
  label: string
  lucideIcon: string
  contact: string
  hrefBuilder: (input: any) => string
}

export const MY_CONTACTS: MyContact[] = [
  {
    label: 'WhatsApp',
    lucideIcon: 'Phone',
    contact: '48988142547',
    hrefBuilder: (phoneNumber: string) => `https://api.whatsapp.com/send/?phone=55${phoneNumber}&text=Hello%20Anderson!&type=phone_number&app_absent=1`,
  },
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
