<template>
  <el-row>
    <el-col>
      <el-result icon="warning" title="Not found"
        sub-title="Please check the path after review or return to the homepage">
        <template #extra>
          <el-button type="primary" @click="goBack">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const router = useRouter()
const goBack = () => {
  router.push({
    name: 'home',
  })
}
</script>
