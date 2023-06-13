<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card-body">
      <slot class="card-slot"></slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply bg-base-100 shadow-xl;
  /* width: auto; */
}

.card-body {
  display: flex;
  flex-direction: row;
}


@media (max-width: 1024px) {
  .card {
    min-width: 100%;
    max-width: 80vw !important;
    /* REVIEW esse 80vw foi para deixar o card "certinho" quando em dispositivo móvel */
  }
}
</style>
