<script lang="ts" setup></script>

<template>
  <div class="">
    <nav class="navbar_wrapper">
      <section>
        <!-- logo -->
        <div class="logo inline-flex">
          <a class="" href="/">
            <div class="hidden md:block">
              <icon-ph:bug />
            </div>
            <div class="block md:hidden">
              <icon-ph:bug />
            </div>
          </a>
        </div>
        <!-- end logo -->
      </section>

      <section>
        <!-- search bar -->
        <!-- <SearchInput /> -->
        <!-- end search bar -->
      </section>

      <section>
        <!-- buttons wrapper -->
        <div class="flex-initial">
          <div class="flex justify-end items-center relative">
            <div class="flex items-center">
              <!-- <ThemeSelectorBtn /> -->
              <ToggleThemeBtn />
            </div>
          </div>
        </div>
        <!-- end buttons wrapper -->
      </section>
    </nav>
  </div>
</template>

<style scoped lang="postcss">
/*  */
.navbar_wrapper {
  @apply flex relative justify-between items-center mx-auto px-8 h-20;

  .logo:hover {
    transition: transform 0.3s;
    transform: scale(1.1);
  }
}
</style>
