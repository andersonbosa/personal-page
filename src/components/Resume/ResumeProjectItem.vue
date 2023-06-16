<script lang="ts" setup>
import type { ParsedRepo } from '@/types'

const props = defineProps({
  project: {
    type: Object as () => ParsedRepo,
    required: true,
  },
})

onMounted(() => {
  console.log(props.project)
})
</script>

<template>
  <div class="project_item_wrapper">
    <div class="project_item_card">
      <div class="project_item_top_border"></div>
      <div class="project_item_card_content">
        <a :href="project.url">
          <h4>{{ project.name }}</h4>
        </a>

        <hr />

        <section class="mt-4">
          <p v-if="project.description">
            <img class="inline-block h-5 w-5 pr-2" src="/images/quote_symbol.svg" />
            {{ project.description }}
          </p>
          <p v-else>
            Created at: {{ project.createdAt }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.project_item_wrapper {
  @apply w-full h-full m-1;
}
.project_item_card {
  @apply block w-full h-full rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30;
}
.project_item_top_border {
  @apply h-1 overflow-hidden rounded-t-lg bg-primary;
}
.project_item_card_content {
  word-wrap: break-word;

  @apply p-6 w-full h-full;

  h4 {
    @apply mb-4 text-lg font-semibold;
  }
}
@media (max-width: 1024px) {
  .project_item_card_content {
    padding: 1rem;
  }
}
</style>
