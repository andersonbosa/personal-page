<script setup lang="ts">
import { themeChange } from 'theme-change'

const isDarkThemeSetuped = () => Boolean(document.querySelector('[data-theme="dark"]'))

const isDark = ref(isDarkThemeSetuped())

const handleThemeToggle = () => {
  isDark.value = !isDark.value
}

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <ElTooltip :content="isDark ? 'Turn light' : 'Turn dark'">
    <section>
      <button
      class="toggle_theme_btn"
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
        @click="handleThemeToggle"
      >
        <span>
          <IconPhSun v-if="isDark" />
          <IconPhMoon v-else />
        </span>
      </button>
    </section>
  </ElTooltip>
</template>

<style lang="postcss" scoped>
.toggle_theme_btn {
  @apply flex flex-col;
  @apply btn btn-ghost;
}
</style>
