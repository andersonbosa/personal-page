<script lang="ts" setup></script>

<template>
  <section>
    <Card>
      <template #default>
        <div class="curriculum_wrapper">
          <h3 class="mycard_title">Curriculum</h3>
          <section>
            <div class="flex items-center justify-between">
              <div class="flex gap-3">
                <div
                  class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-300"
                >
                  <IconPhFilesFill />
                </div>
                <div class="font-medium">
                  <div class="text-sm text-gray-900 dark:text-gray-100">
                    Anderson Bosa
                  </div>
                  <div class="text-xs text-gray-400 dark:text-gray-400">
                    PDF &amp; Online
                  </div>
                </div>
              </div>

              <div
                class="hovered_item cursor-pointer rounded-full bg-primary-500/20 py-2.5 px-2.5 text-primary-500"
              >
                <a href="#">
                  <IconPhDownloadSimple />
                </a>
              </div>
            </div>
          </section>
        </div>
      </template>
    </Card>
  </section>
</template>

<style scoped lang="postcss">
.curriculum_wrapper {
  @apply w-full;
}
</style>
