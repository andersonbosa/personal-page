<script lang="ts" setup>
import type { ParsedRepo } from '@/types'

defineProps({
  project: {
    type: Object as () => ParsedRepo,
    required: true,
  },
})
</script>

<template>
  <div class="project_item_wrapper">
    <div class="project_item_card">
      <div class="project_item_top_border"></div>
      <div class="project_item_card_content">
        <h4>{{ project.name }}</h4>
        <hr />
        <p class="mt-4">
          <img class="inline-block h-7 w-7 pr-2" src="/images/quote_symbol.svg" />
          Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
        </p>
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
    @apply mb-4 text-xl font-semibold;
  }
}
</style>
