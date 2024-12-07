


 <!-- pages/index.vue -->
<template>
  <div>
    <!-- Include the sidenav component -->
    <sidenav></sidenav>

    <!-- Your page content here -->
    <div>
      <h1>Welcome to my website</h1>
      <!-- Other content -->
    </div>
  </div>
</template>

<script>
import Sidenav from '~/pages/side_nav.vue';

export default {
  components: {
    Sidenav, // Registering the sidenav component
  },
  // Other page logic goes here
}
</script>

<style>
/* Page-specific styles */
</style>
