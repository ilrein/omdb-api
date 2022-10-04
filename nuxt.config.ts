export default defineNuxtConfig({
  css: ["~/assets/global.css"],
  
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  }
});
