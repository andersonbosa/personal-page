

export const titleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function updateUrlLocale (url: string, newLocale: string): string {
  const localeRegex = /^\/([a-z]{2}-[a-z]{2})\//
  const match = url.match(localeRegex)

  if (match && match[1]) {
    const currentLocale = match[1]
    const updatedUrl = url.replace(currentLocale, newLocale)
    return updatedUrl
  }

  return url
}
