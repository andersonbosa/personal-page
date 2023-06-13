<script lang="ts" setup>
</script>

<template>
  <div class="navbar_wrapper">
    <div class="navbar">
      <div class="navbar-start">
        <div class="btn btn-ghost normal-case text-xl">
          <router-link to="/">ANB</router-link>
        </div>
      </div>

      <div class="navbar-center lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/useless">Something useless</router-link>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
        <ToggleThemeBtn />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/*  */
.navbar_wrapper {
  @apply flex relative justify-between items-center;
  @apply mx-auto px-8 h-20;
  .navbar {
    @apply bg-base-100;
  }
  .logo {
    @apply text-black;
    @apply dark:text-white;
    @apply font-bold text-2xl;
  }

  .logo:hover {
    transition: transform 1.2s;
    transform: scale(2);
  }
}
</style>
