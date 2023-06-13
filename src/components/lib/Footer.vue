<template>
  <section class="footer p-10 bg-neutral text-neutral-content">
    <footer class="footer">
      <!--
      <div>
         <span class="footer-title">Services</span>
          <a class="link link-hover"></a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
      </div>
        -->
      <div>
        <span class="footer-title">Pages</span>
        <a class="link link-hover">
          <router-link to="/">Home</router-link>
        </a>
        <a class="link link-hover">
          <router-link to="/useless">Something useless</router-link>
        </a>
      </div>
      <!--  <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">License</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div> -->
    </footer>
    <div class="text-center text-xs">
      <p>ANB | <span class="flip-left"> © </span> Copyleft 2023 - {{ today }} </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const today = ref(new Date().getFullYear().toString())
</script>

<style scoped lang="postcss">
.flip-left {
  display: inline-flex;
  transform: scale(-1.6);
  padding-top: 1px; /* to align with the rest */
}
</style>
