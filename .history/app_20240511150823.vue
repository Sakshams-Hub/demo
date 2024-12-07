<template>
  <div>
    <h1>Hello World</h1>
    
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0)
    return {
      count
    }   
  }
  
}
</script>
