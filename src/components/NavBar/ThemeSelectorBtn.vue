<script setup lang="ts">
import { themeChange } from 'theme-change'
// const availableThemes = [
//    { ... }
// ]

onMounted(() => {
  themeChange(false)
})

/* https://daisyui.com/docs/themes/ */
</script>

<template>
  <div class="theme_selector_btn">
    <div class="dropdown dropdown-end">
      <ElTooltip content="Change Theme">
        <div tabindex="0" class="btn normal-case btn-ghost">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="h-5 w-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
            </path>
          </svg>
          <span class="hidden font-normal md:inline">Theme</span>
          <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
      </ElTooltip>

      <!-- TODO: dynamic mount -->
      <div class="dropdown-content">
        <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">

          <button class="outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
            data-set-theme="light" data-act-class="[&amp;_svg]:visible">
            <div data-theme="light" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    class="invisible h-3 w-3 shrink-0">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                  <div class="flex-grow text-sm">light</div>
                  <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button class="outline-base-content overflow-hidden rounded-lg text-left" data-set-theme="dark"
            data-act-class="[&amp;_svg]:visible">
            <div data-theme="dark" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    class="invisible h-3 w-3 shrink-0">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                  <div class="flex-grow text-sm">dark</div>
                  <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.theme_selector_btn {
  .flip-horizontal {
    @apply -scale-x-100;
  }

  .dropdown-content {
    @apply bg-base-200 text-base-content rounded-box top-px max-h-96 w-56 overflow-y-auto shadow mt-16;
  }

}
</style>
