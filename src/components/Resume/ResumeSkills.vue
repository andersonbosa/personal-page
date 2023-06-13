<script setup lang="ts">
import { myTechnologies } from '@/utils/db'
</script>

<template>
  <div>
    <Card>
      <template #default>
        <div>
          <h3 class="mycard_title">Skills</h3>
          <div class="badges_wrapper">
            <span v-for="(item, index) in myTechnologies" :key="index" class="badge">
              {{ item.label }}
            </span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="postcss">
.badges_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  span {
    @apply m-1;
  }
}
</style>
