<template>
  <div>
    <h1>Hello World</h1>
    <label>Name</label><br>
    <input type="text" placeholder="name">
    <button>Submit</button>
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
