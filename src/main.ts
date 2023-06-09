import '@/assets/styles/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import stores from '@/stores'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(stores)

app.mount('#app')
