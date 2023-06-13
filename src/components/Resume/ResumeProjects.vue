<script lang="ts" setup>
import { GithubProjectManager } from '@/utils'

const projects: any = ref([])

onMounted(() => {
  new GithubProjectManager('andersonbosa')
    .parseGithubRepositories()
    .then((repos) => {
      projects.value = repos
    })
})
</script>

<template>
  <div>
    <Card>
      <template #default>
        <div>
          <h3 class="mycard_title">Projects</h3>
          <section>
            <div v-for="(project, index) in projects" :key="index">
              {{ project.name }}
            </div>
          </section>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
