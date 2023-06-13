export type ParsedRepo = {
  name: string,
  description: string,
  topics: string[],
  url: string,
  languages: string,
  createdAt: string,
  raw: any
}

export type TimelineItem = {
  jobTitle: string
  companyName: string
  companyLocation: string
  startedAt: Date
  exitAt?: Date
  mainSkills: string[],
  companyLink: string
}
