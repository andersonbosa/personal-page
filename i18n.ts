
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { AVAIABLE_LANGUAGES } from './constants'
import { i18nConfig } from './types'

export const i18nConfiguration: i18nConfig = {
  locales: AVAIABLE_LANGUAGES.map(({ id }) => id),
  defaultLocale: AVAIABLE_LANGUAGES.find(langItem => langItem.default)?.id ?? 'en-us'
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
