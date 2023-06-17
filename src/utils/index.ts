import type { ParsedRepo } from '@/types'


export class GithubProjectManager {
  MAX_CONTENT_LENGTH = 128
  private username: string

  constructor (username: string) {
    this.username = username
  }

  async parseGithubRepositories (): Promise<ParsedRepo> {
    const repos = await this.queryGithubRepositoriesByUser()
    return repos
      .map((repo: any) => this.parseRepoToShow(repo))
  }

  async queryGithubRepositoriesByUser (): Promise<any> {
    try {
      const response = await fetch(`https://api.github.com/users/${this.username}/repos`)
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  }

  parseRepoToShow (repo: any): any {
    const isTLDR = repo?.description?.length >= this.MAX_CONTENT_LENGTH
    if (isTLDR) {
      const firstPart = repo?.description.slice(0, this.MAX_CONTENT_LENGTH)
      repo.description = `${firstPart.trim()}...`
    }

    return {
      name: repo.name,
      description: repo.description,
      topics: repo.topics,
      url: repo.html_url,
      languages: repo.language,
      createdAt: this.formatDate(repo.created_at),
      raw: repo,
    }
  }

  formatDate (date: string): string {
    const options = { timeZone: 'America/Sao_Paulo' }
    return new Date(date).toLocaleDateString('pt-BR', options)
  }
}

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
    createdAt: formatDate(repo.created_at),
    raw: repo
  }
}

function formatDate (date: string): string {
  const options = { timeZone: 'America/Sao_Paulo' }
  return new Date(date)
    .toLocaleDateString('pt-BR', options)
}
