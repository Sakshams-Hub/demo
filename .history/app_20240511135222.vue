<template>
  <div>
    <h1>Hello World</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  setup() {
    const name = ref("Tommy")
    return {
      name
    }   
  }
}
</script>
