<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const componentState = reactive({})

const stateRefs = toRefs(componentState)

defineProps({
  someStringProp: {
    type: String,
    required: false,
  },
})
</script>
<template>
  <div class="resume_wrapper">
    <div class="resume-grid_wrapper">
      <div class="resume-grid_left_column">left/top</div>
      <div class="resume-grid_right_column">right/bottom</div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.resume_wrapper {
  height: 300px;
}

.resume-grid_wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* grid-gap: 10px; */
  height: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.resume-grid_left_column {
  background-color: #f1f1f1;
  padding: 10px;
}

.resume-grid_right_column {
  background-color: #ccc;
  padding: 10px;
}
</style>
