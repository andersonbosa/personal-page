'use client'

import { i18nConfiguration } from '@/i18n'
import Error from 'next/error'

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound () {
  return (
    <html lang={i18nConfiguration.defaultLocale}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  )
}
