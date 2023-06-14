<script lang="ts" setup>
import type { TimelineItem } from '@/types'

const _props = defineProps({
  timelineItems: {
    type: Array as () => Array<TimelineItem>,
    required: false,
  },
})

const formatDate = (date: Date) => {
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
</script>

<template>
  <section class="timeline_index_wrapper">
    <el-timeline>
      <el-timeline-item
        v-for="(timelineItem, index) in timelineItems"
        :key="index"
        :timestamp="formatDate(timelineItem.startedAt)"
        placement="top"
      >
        <TimelineCard :item="timelineItem" :index="index" />
      </el-timeline-item>
    </el-timeline>
  </section>
</template>

<style scoped lang="postcss">
/* ... */
</style>
