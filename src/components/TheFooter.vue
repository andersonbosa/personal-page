<template>
  <div class="text-center">
    <el-tooltip :content="'home'" placement="top">
      <router-link class="icon-btn mx-2" to="/">
        <i-mdi-home-search-outline class="icon" />
      </router-link>
    </el-tooltip>

    <el-tooltip :content="isDark ? 'change light' : 'change dark'" placement="top">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <i-ph-cloud-moon-bold v-if="isDark" class="icon" />
        <i-ph-sun-horizon-bold v-else class="icon" />
      </button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.icon {
  font-size: 1.3em;
}
</style>
