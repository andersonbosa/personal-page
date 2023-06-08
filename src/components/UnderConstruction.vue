<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
  running: boolean
}

const countdown = ref<Countdown>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 4,
  running: true
})


const updateCountdown = () => {
  const countdownInterval = setInterval(() => {
    if (!countdown.value.running) {
      return
    }

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

const isCountdownCompleted = () => countdown.value.days === 0 &&
  countdown.value.hours === 0 &&
  countdown.value.minutes === 0 &&
  countdown.value.seconds === 0

watch(countdown.value, (_newValue) => {
  if (isCountdownCompleted()) {
    countdown.value.running = false

    const msg1 = 'Its a joke! I don\'t know how long it is missing 🥳'
    const msg2 = 'You can contact me at: https://www.linkedin.com/in/andersonbosa/'

    window.alert(msg1 + '\n\n\n' + msg2)
    window.open('https://www.linkedin.com/in/andersonbosa/', 'blank')
  }
})
</script>


<template>
  <section class="card_parent">
    <div class="card_wrapper">
      <h1 class="card_title">Under Construction</h1>
      <p class="card_phrase">We're working on something awesome. Please check back later!</p>
      <hr />
      <p class="card_phrase">
        Please come back in
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

.card_parent {
  @apply bg-monokai-gray-800 flex items-center justify-center h-screen w-screen;
}

.card_wrapper {
  transform: scale(1.4);
  @apply bg-monokai-gray-700 shadow p-8 rounded-md w-96;
}

@media (max-width: 640px) {
  .card_wrapper {
    transform: scale(0.9);
  }
}


.card_title {
  @apply text-2xl font-bold mb-4 text-monokai-green;

}

.card_phrase {
  @apply text-gray-300 my-8;
}
</style>
