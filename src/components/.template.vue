<script  lang="ts" setup >
import { reactive, toRefs } from 'vue'


const componentState = reactive({
  count: 0,
})

const stateRefs = toRefs(componentState)

defineProps({
  someStringProp: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div>
    <p>{{ stateRefs.count.value }}</p>
  </div>
</template>

<style scoped></style>
