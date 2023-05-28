export async function parseGithubRepositories (username: any): Promise<any> {
  const repos = await queryGithubRepositoriesByUser(username)

  return repos.map(parseRepoToShow)
}

export async function queryGithubRepositoriesByUser (username: any): Promise<any> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export function parseRepoToShow (repo: any): any {
  const MAX_CONTENT_LENGTH = 128

  const isTLDR = repo?.description?.length >= MAX_CONTENT_LENGTH
  if (isTLDR) {
    const firstPart = repo?.description.slice(0, 128)
    repo.description = `${firstPart.trim()}...`
  }

  return {
    name: repo.name,
    description: repo.description,
    topics: repo.topics,
    url: repo.html_url,
    languages: repo.language,
    shieldImg: `https://img.shields.io/github/stars/${repo?.owner?.login}/${repo?.name}?style=social`,
    createdAt: formatDate(repo.created_at),
    backgroundColor: generateShadesOfGrayBackgroundColor(),
  }
}

function formatDate (date: string): string {
  const options = { timeZone: 'America/Sao_Paulo' }
  return new Date(date)
    .toLocaleDateString('pt-BR', options)
}

export function generateShadesOfGrayBackgroundColor (): string {
  const randomShade = Math.floor(Math.random() * 256)
  const grayColor = `rgb(${randomShade}, ${randomShade}, ${randomShade})`

  const isDarker = randomShade < 100
  if (isDarker) {
    return generateShadesOfGrayBackgroundColor()
  }

  return grayColor
}

export function invertFontColor (backgroundColor: any): any {
  if (!backgroundColor) {
    return backgroundColor
  }

  const sanitizedColorNumber = Number(
    backgroundColor
      ?.replace(/^rgb\(/, '')
      ?.replace(/\)$/, '')
      ?.split(',')[0]
  )

  if (sanitizedColorNumber > 200) {
    return 'inherit'
  }

  return 'white'
}
