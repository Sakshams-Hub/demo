import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // Add modules here
    '@nuxtjs/composition-api', // Add Composition API module
    // Other modules you might need...
  ],
});
