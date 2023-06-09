<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider :config="{}">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
