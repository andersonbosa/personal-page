<script lang="ts" setup>
// import { reactive, toRefs } from 'vue'
// const componentState = reactive({})
// const stateRefs = toRefs(componentState)
// defineProps({
//   someStringProp: {
//     type: String,
//     required: false,
//   },
// })
</script>
<template>
  <div class="resume_wrapper">
    <div class="resume-grid_wrapper">
      <div class="resume-grid_left_column">

        <!-- profile -->
          <!-- avatar -->
          <!-- container -->
            <!-- name -->
            <!-- job title -->
            <!-- contacts -->
          <!-- end container -->
        <!-- end profile -->

        <!-- facts -->
        <!-- end facts -->

        <!-- skills -->
        <!-- end skills -->

        <!-- languages -->
        <!-- end languages -->

        <!-- curriculum -->
        <!-- end curriculum -->

      </div>
      <div class="resume-grid_right_column">

        <!-- about -->
        <!-- end about -->

        <!-- experiences -->
        <!-- end experiences -->

        <!-- projects -->
        <!-- end projects -->

      </div>
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
  padding: 10px;
}

.resume-grid_right_column {
  padding: 10px;
}
</style>
