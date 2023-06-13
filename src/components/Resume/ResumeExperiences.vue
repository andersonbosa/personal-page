<script lang="ts" setup>
const careerExperiences = [
  {
    jobTitle: 'Fullstack Developer',
    companyName: 'Linx',
    companyLocation: 'Florianópolis, Brazil',
    startedAt: new Date('01/09/2019'),
    exitAt: new Date('01/07/2021'),
    mainSkills: [
      'Troubleshooting',
      'Debugging',
      'Automation',
      'BASH',
      'Javascript',
      'Vue.js',
      'Node.js',
      'Cypress',
      'Python',
      'Express.js',
      'GraphQL'
    ],
    companyLink: 'https://www.linx.com.br/linx-impulse/',
  },
  {
    jobTitle: 'Security Analyst',
    companyName: 'Conviso Application Security',
    companyLocation: 'Curitiba, Brazil',
    startedAt: new Date('01/07/2021'),
    exitAt: new Date('01/05/2022'),
    mainSkills: [
      'CIA triad',
      'OWASP SAMM',
      'Pentesting',
      'Vulnerability Assessment',
      'Risk analysis',
      'Effective communication',
      'Target enumeration',
      'Security Scannings',
      'Reporting',
      'Explotation',
      'BurpSuite',
      'Linux',
    ],
    companyLink: 'https://www.convisoappsec.com/',
  },
  {
    jobTitle: 'Backend Software Engineer',
    companyName: 'Conviso Application Security',
    companyLocation: 'Curitiba, Brazil',
    startedAt: new Date('01/05/2022'),
    exitAt: undefined,
    mainSkills: [
      'Secure Coding',
      'Code optimization',
      'Scalability',
      'Ruby',
      'Ruby on Rails'
    ],
    companyLink: 'https://www.convisoappsec.com/',
  },
]
</script>

<template>
  <div class="resume_experiences">
    <Card>
      <template #default>
        <div class="card_content">
          <h3 class="mycard_title">Experiences</h3>
          <section>
            <TimelineIndex :timeline-items="careerExperiences" />
          </section>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="postcss">
.card_content {
  width: 100%;
}
</style>
