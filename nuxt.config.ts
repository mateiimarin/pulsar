// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'},
        ]
    }
  
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    openaiKey: process.env.NUXT_OPENAI_KEY,
  },
})
