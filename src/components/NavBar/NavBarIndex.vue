<script lang="ts" setup>
import { isDark, toggleDark } from '@/utils/dark'
</script>

<template>
  <div class="">
    <nav class="navbar_wrapper">
      <!-- logo -->
      <div class="inline-flex">
        <a class="" href="/">
          <div class="hidden md:block">[logo]</div>
          <div class="block md:hidden">[logo mobile]</div>
        </a>
      </div>
      <!-- end logo -->

      <!-- search bar -->
      <!-- <SearchInput /> -->
      <!-- end search bar -->

      <!-- buttons wrapper -->
      <div class="flex-initial">
        <div class="flex justify-end items-center relative">
          <div class="flex mr-4 items-center">
            <div class="block relative">
              <ThemeSelectorBtn />
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
.navbar_wrapper {
  @apply w-full flex relative justify-between items-center mx-auto px-8 h-20;
}
</style>
