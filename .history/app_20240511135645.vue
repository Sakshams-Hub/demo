<template>
  <div>
    <h1>Hello World</h1>
    <h2>{{ count }}</h2>
    <button @click="count++" >Increase</button>
    <button @click="count--" >decrease</button>
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
