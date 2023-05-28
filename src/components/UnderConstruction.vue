<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const countdown = ref<Countdown>({
  days: 0,
  hours: 0,
  minutes: 3,
  seconds: 47
})

const updateCountdown = () => {
  const countdownInterval = setInterval(() => {
    countdown.value.seconds--

    if (countdown.value.seconds < 0) {
      countdown.value.seconds = 59
      countdown.value.minutes--

      if (countdown.value.minutes < 0) {
        countdown.value.minutes = 59
        countdown.value.hours--

        if (countdown.value.hours < 0) {
          countdown.value.hours = 23
          countdown.value.days--

          if (countdown.value.days < 0) {
            clearInterval(countdownInterval)
          }
        }
      }
    }
  }, 1000)
}

onMounted(() => {
  updateCountdown()
})

watch(countdown, (newValue) => {
  if (newValue.days === 0 && newValue.hours === 0 && newValue.minutes === 0 && newValue.seconds === 0) {
    // Countdown reached zero, do something here if needed
    ElMessage.warning(`Its a joke! I don't know how long it is missing 🥳`)
  }
})
</script>


<template>
  <section class="parent">
    <div class="parentparent">
      <h1 class="parentparentparent">Under Construction</h1>
      <p class="parentparentparentparent">We're working on something awesome. Please check back later!</p>
      <p class="parentparentparentparentparent">Please come back in
        <strong>{{ countdown.days }}</strong> days,
        <strong>{{ countdown.hours }}</strong> hours,
        <strong>{{ countdown.minutes }}</strong> minutes, and
        <strong>{{ countdown.seconds }}</strong> seconds.
      </p>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer utilities {
  .text-monokai-green {
    --tw-text-opacity: 1;
    color: rgba(140, 255, 102, var(--tw-text-opacity));
  }

  .bg-monokai-gray-700 {
    --tw-bg-opacity: 1;
    background-color: rgba(39, 40, 34, var(--tw-bg-opacity));
  }

  .bg-monokai-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgba(49, 51, 46, var(--tw-bg-opacity));
  }
}

.parent {
  @apply bg-monokai-gray-800 flex items-center justify-center h-screen w-screen;
}

.parentparent {
  transform: scale(1.4);
  @apply bg-monokai-gray-700 shadow p-8 rounded-md w-96;
}

.parentparentparent {
  @apply text-2xl font-bold mb-4 text-monokai-green;
}

.parentparentparentparent {
  @apply text-gray-300 mb-8;
}

.parentparentparentparentparent {
  @apply text-gray-300;
}
</style>
