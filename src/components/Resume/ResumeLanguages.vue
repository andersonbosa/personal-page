<script setup lang="ts">
const languages = [
  {
    title: 'Portuguese',
    expertise: 'Native',
    imagePath: '/images/flag_brazil.svg',
  },
  {
    title: 'English',
    expertise: 'Intermediary',
    imagePath: '/images/flag_usa.svg',
  },
  {
    title: 'Italian',
    expertise: 'Wanting to learn',
    imagePath: '/images/flag_it.svg',
  },
]
</script>

<template>
  <div>
    <Card>
      <template #default>
        <div class="languages_wrapper">
          <h3 class="mycard_title">Languages</h3>
          <section class="languages_wrapper_section">
            <div
              v-for="(language, index) in languages"
              :key="index"
              class="language_card hovered_item"
            >
              <img :src="language.imagePath" alt="Avatar" class="" />
              <div class="font-medium">
                <div class="title">{{ language.title }}</div>
                <div class="expertise">{{ language.expertise }}</div>
              </div>
            </div>
          </section>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="postcss" scoped>
.languages_wrapper {
  @apply w-full;

  .languages_wrapper_section {
    display: flex;
    flex: auto;
    flex-wrap: wrap;

    .language_card {
      @apply flex;
      @apply min-w-[156px];
      @apply w-full;
      @apply gap-2 px-4 py-2;
      @apply cursor-pointer items-center;

      img {
        @apply h-8 w-8 rounded-full border-2 border-white shadow-sm;
        @apply dark:border-gray-700;
      }

      .title {
        @apply text-xs text-gray-600;
        @apply dark:text-gray-200;
      }

      .expertise {
        @apply text-xs text-gray-400;
        @apply dark:text-gray-400;
      }
    }
  }
}

@media (max-width: 1024px) {
  .languages_wrapper_section {
    /* flex-wrap: nowrap !important; */
    @apply flex-nowrap !important;
  }
}

@media (max-width: 739px) {
  .languages_wrapper_section {
    /* flex-wrap: nowrap !important; */
    @apply flex-wrap !important;
  }
}
</style>
