<script  lang="ts" setup >
import { reactive, toRefs } from 'vue'
import { isDark, toggleDark } from '@/utils/dark'

// const componentState = reactive({
//   count: 0,
// })

// const stateRefs = toRefs(componentState)

</script>

<template>
  <div class="navbar_wrapper">
    <nav class="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <!-- logo -->
      <div class="inline-flex">
        <a class="" href="/">
        <div class="hidden md:block">
          [logo]
        </div>
        <div class="block md:hidden">
          [logo mobile]
        </div>
      </a>
    </div>
    <!-- end logo -->

    <!-- search bar -->
    <!--
      <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
          <div class="inline-flex items-center max-w-full">
            <button class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
              type="button">
              <div class="block flex-grow flex-shrink overflow-hidden">Start your search</div>
                <div class="flex items-center justify-center relative  h-8 w-8 rounded-full">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                          focusable="false" style="
                                                    display: block;
                                                    fill: none;
                                                          height: 12px;
                                                          width: 12px;
                                                          stroke: currentcolor;
                                                          stroke-width: 5.33333;
                                                          overflow: visible;
                                                        ">
                                                  <g fill="none">
                                                    <path
                                                      d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                                    </path>
                                                  </g>
                                                </svg>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      -->
      <!-- end search bar -->

      <!-- buttons wrapper -->
      <div class="flex-initial">
        <div class="flex justify-end items-center relative">
          <div class="flex mr-4 items-center">
            <div class="block relative">
              <el-tooltip :content="isDark ? 'Change to light' : 'Change to dark'" placement="top">
                <button @click="toggleDark()" type="button"
                  class="inline-block p-2 hover:bg-gray-200 rounded-full relative">
                  <div class="flex items-center h-5">
                    <!-- button -->
                    <div class="text-center">
                      <button class="icon-btn m-2 !outline-none">
                        <icon-ph-moon v-if="isDark" />
                        <icon-ph-sun v-else />
                      </button>
                    </div>
                    <!-- end button -->
                  </div>
                </button>
              </el-tooltip>
            </div>
          </div>

        </div>
      </div>
      <!-- end buttons wrapper -->
    </nav>
  </div>
</template>

<style scoped lang="postcss">
/*  */
</style>
