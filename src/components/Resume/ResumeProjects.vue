<script lang="ts" setup>
import { GithubProjectManager } from '@/utils'

/* reactives */
const projects: any = ref([])
const itemsPerPage = ref(3)
const currentPage = ref(1)

/* computeds */
const totalPages = computed(() => Math.ceil(projects.value.length / itemsPerPage.value))
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return projects.value.slice(start, end)
})

/* methods */
function previousPage () {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage () {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

/* life cycles */
onMounted(() => {
  new GithubProjectManager('andersonbosa').parseGithubRepositories().then((repos) => {
    projects.value = repos
  })
})
</script>

<template>
  <div>
    <Card>
      <template #default>
        <div class="w-full">
          <h3 class="mycard_title">Projects</h3>

          <section
            class="projects_list_wrapper text-neutral-700 dark:text-neutral-300 w-full"
          >
            <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
              <p class="mb-6 pb-2 md:mb-12 md:pb-0">
                <!-- TODO -->
                Ex esse eu duis ullamco cupidatat sint nisi adipisicing occaecat
                exercitation nostrud nisi.
              </p>
            </div>

            <ul class="projects_list grid gap-6 text-center md:grid-cols-3 w-full">
              <li
                v-for="(item, index) in paginatedProjects"
                :key="index - 1"
                class="projects_item flex flex-initial flex-row w-full"
              >
                <ResumeProjectItem :project="item" />
              </li>
            </ul>
          </section>

          <section class="pagination_wrapper mt-10">
            <div class="join">
              <button
                @click="previousPage"
                :disabled="currentPage === 1"
                class="join-item btn"
              >
                «
              </button>
              <button class="join-item btn">Page {{ currentPage }}</button>
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="join-item btn"
              >
                »
              </button>
            </div>
          </section>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
