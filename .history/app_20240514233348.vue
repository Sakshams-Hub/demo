<template>
  <div>
    <Layout>
      <!-- Include your initial page/component here -->
      <Home />
    </Layout>
  </div>
</template>

<script setup>
import Home from '~/pages/home.vue'; // Import the component or page you want to display
import Layout from '@/layouts/default.vue'; // Import your default layout
</script>

<style scoped>
/* Add global styles here */
</style>
