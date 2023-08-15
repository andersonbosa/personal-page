<script lang="ts" setup>
import type { TimelineItem } from '@/types'

const _props = defineProps({
  index: Number,
  item: {
    type: Object as () => TimelineItem,
    required: true,
  },
})
</script>

<template>
  <section class="timeline_card_wrapper">
    <div
      :tabindex="index"
      class="collapse collapse-plus border border-base-300 bg-base-200"
    >
      <div class="collapse-title">
        <p>
          <span class="job_title">
            {{ item.jobTitle }}
          </span>
          at
          <a :href="item.companyLink" target="_blank" class="link">
            {{ item.companyName }}
          </a>
        </p>
        <p class="text-xs text-gray-400 flex flex-initial">
          <icon-ic:baseline-location-on />
          {{ item.companyLocation }}
        </p>
      </div>

      <div class="collapse-content">
        <section>
          <h3 class="">Principal learnings</h3>
          <div class="flex-initial flex flex-row flex-wrap">
            <span
              v-for="(skill, skillIndex) in item.mainSkills"
              :key="skillIndex"
              class="badge mr-2 mb-2 p-3"
            >
              {{ skill }}
            </span>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply w-full;
}

h3 {
  @apply mb-2 label-text-alt italic;
}
.collapse-title {
  @apply text-gray-800;
  @apply dark:text-gray-50;
}
/* ... */
</style>
