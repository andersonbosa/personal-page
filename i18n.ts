
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { i18nConfig } from './types'

export const i18nConfiguration: i18nConfig = {
  locales: [
    "en-us",
    "pt-br"
  ],
  defaultLocale: 'en-us'
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!i18nConfiguration.locales.includes(locale as any)) {
    notFound()
  }

  return {
    messages: (await import(`./public/locales/${locale}.json`)).default
  }
})
