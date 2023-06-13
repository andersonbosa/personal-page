<script setup lang="ts"></script>

<template>
  <div>
    <Card>
      <template v-slot:default>
        <div class="avatar">
          <div class="w-24 rounded">
            <img src="https://github.com/andersonbosa.png" />
          </div>
        </div>

        <div class="profile_info">
          <div class="card-title">
            <p>Anderson d'N. Bosa</p>
          </div>

          <div class="card_subtitle">
            <code> Software Engineer & <wbr /> AppSec enthusiasty </code>
          </div>

          <div class="card-badges">
            <div class="card_badge_item">
              <a href="https://www.linkedin.com/in/andersonbosa/" target="_blank">
                <icon-mdi-linkedin />
                <!-- linkedin -->
              </a>
            </div>

            <div class="card_badge_item">
              <a href="https://github.com/andersonbosa" target="_blank">
                <icon-mdi-github />
                <!-- github -->
              </a>
            </div>

            <div class="card_badge_item">
              <a href="https://twitter.com/t4inha" target="_blank">
                <icon-mdi-twitter />
                <!-- twitter -->
              </a>
            </div>

            <div class="card_badge_item">
              <a href="https://instagram.com/andersounde" target="_blank">
                <icon-mdi-instagram />
                <!-- instagram -->
              </a>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="postcss">
.profile_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .card_subtitle {
    font-size: 0.8rem;
  }
}

.card-badges {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0 16px;
  .card_badge_item {
    font-size: 1.1rem;
    &:hover {
      transform: scale(1.3);
      transition: all 0.4s;
    }
  }
}
</style>
