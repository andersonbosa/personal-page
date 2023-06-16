<script lang="ts" setup></script>

<template>
  <div class="resume_wrapper">
    <div class="resume_grid_wrapper">
      <div class="grid_column resume_grid_left_column">
        <section>
          <ResumeProfile />
        </section>

        <section>
          <ResumeSkills />
        </section>

        <section>
          <ResumeLanguages />
        </section>

        <section>
          <ResumeDownload />
        </section>
      </div>

      <div class="grid_column resume_grid_right_column">
        <section>
          <ResumeAbout />
        </section>

        <section>
          <ResumeExperiences />
        </section>

        <section>
          <ResumeProjects />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.resume_wrapper {
  @apply w-full;
  min-height: 100%;
  min-width: 100%;
  @apply px-4;
  @apply pb-4;

  .resume_grid_wrapper {
    display: grid;

    grid-template-columns: 1fr 2fr;
    height: 100%;
    @apply gap-4;

    .grid_column {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: stretch;
      @apply gap-4;
    }
  }
}

@media (max-width: 1024px) {
  .resume_grid_wrapper {
    grid-template-columns: 1fr !important;
  }
}
</style>
