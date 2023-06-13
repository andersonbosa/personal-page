<script lang="ts" setup>
const isAboutVisible = ref(false)
</script>
<template>
  <div>
    <Card>
      <template #default>
        <div>
          <h3 class="mycard_title">About me</h3>
          <section>
            <p class="text-justify">
              I'm from Florianópolis, Brazil. I enjoy dancing and listening to music (even
              though I'm terrible at singing). I was a dancer for a few years. I also like
              reading about philosophy and psychology every now and then.<span
                v-if="!isAboutVisible"
                >..</span
              >
            </p>
            <p v-if="isAboutVisible">
              <br />
              I had some exposure to programming when I was 10, but it wasn't until I
              turned 20 that I had a significant encounter that changed my feelings about
              it and inspired me to pursue it professionally.
              <br />
              <br />
              I started my career as a software developer in 2019. Around the same time, I
              already had a clear desire to specialize in Offensive Security and Secure
              Development, and that passion remains strong.
              <br />
              <br />
              I've gained some experience in the field of offensive security, which allows
              me to approach systems from an attacker's perspective. Overall, I continue
              to seek knowledge in Software Engineering and Offensive Security to become a
              better professional in my career.
            </p>
            <div class="flex justify-center pt-4">
              <button class="btn" @click="isAboutVisible = !isAboutVisible">
                {{ isAboutVisible ? 'Hide' : 'Read more' }}
              </button>
            </div>
          </section>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
