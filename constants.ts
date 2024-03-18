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

export const TECHNOLOGIES: any = {
  frontend: [
    {
      slug: 'html',
      label: 'HTML',
      image: 'assets/images/html.svg',
      experience: 5
    },
    {
      slug: 'css',
      label: 'CSS',
      image: 'assets/images/css.svg',
      experience: 4
    },
    {
      slug: 'javascript',
      label: 'JavaScript',
      image: 'assets/images/javascript.svg',
      experience: 5
    },
    {
      slug: 'react',
      label: 'React',
      image: 'assets/images/react.svg',
      experience: 2
    },
    {
      slug: 'vue',
      label: 'Vue.js',
      image: 'assets/images/vue.svg',
      experience: 4
    },
  ],
  backend: [
    {
      slug: 'nodejs',
      label: 'Node.js',
      image: 'assets/images/nodejs.svg',
      experience: 5
    },
    {
      slug: 'expressjs',
      label: 'Express.js',
      image: 'assets/images/expressjs.svg',
      experience: 4
    },
  ],
  api: [
    {
      slug: 'restful-apis',
      label: 'RESTful APIs',
      image: 'assets/images/restful-apis.svg',
      experience: 5
    },
    {
      slug: 'graphql',
      label: 'GraphQL',
      image: 'assets/images/graphql.svg',
      experience: 4
    },
  ],
  devops: [
    {
      slug: 'docker',
      label: 'Docker',
      image: 'assets/images/docker.svg',
      experience: 4
    },
    {
      slug: 'kubernetes',
      label: 'Kubernetes',
      image: 'assets/images/kubernetes.svg',
      experience: 2
    },
  ],
  security: [
    // {
    //   slug: 'ssl-tls',
    //   label: 'SSL/TLS',
    //   image: 'assets/images/ssl-tls.svg',
    //   experience: 4
    // },
    // {
    //   slug: 'oauth',
    //   label: 'OAuth',
    //   image: 'assets/images/oauth.svg',
    //   experience: 4
    // },
    {
      slug: 'nuclei',
      label: 'Nuclei',
      image: 'assets/images/nuclei.svg',
      experience: 4
    },
    {
      slug: 'burp-suite',
      label: 'Burp Suite',
      image: 'assets/images/burp-suite.svg',
      experience: 4
    },
    {
      slug: 'zap',
      label: 'ZAP (Zed Attack Proxy)',
      image: 'assets/images/zap.svg',
      experience: 4
    },
    {
      slug: 'semgrep',
      label: 'Semgrep',
      image: 'assets/images/semgrep.svg',
      experience: 4
    },
  ],
}
