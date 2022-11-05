// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
      public: {
        apiBase: 'http://127.0.0.1:60623/'
      }
  },
  rootDir: './resources',
})
