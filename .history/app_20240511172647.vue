<template>
  <div>
    <h1>User Input</h1>
    <label>Name</label><br>
    <input type="text" placeholder="name">
    <button @click="submit" >Submit</button>
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
