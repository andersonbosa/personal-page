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
  <div class="project_item_wrapper w-full h-full m-1">
    <div
      class="project_item_card block w-full h-full rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30"
    >
      <div
        class="project_item_top_border h-1 overflow-hidden rounded-t-lg bg-primary"
      ></div>

      <div class="project_item_card_content p-6 w-full h-full">
        <h4 class="mb-4 text-xl font-semibold">{{ project.name }}</h4>
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
}
.project_item_card {
}
.project_item_top_border {
}
.project_item_card_content {
}

/* ... */
</style>
