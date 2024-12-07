<template>
  <div>
    <h1>User Input</h1>
    <label>Name</label><br>
    <input type="text" placeholder="name"><br>
    <button @click="submit" >Submit</button>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  setup() {
    const name = ref('')
    function submit(){
      console.log(name.value)
    }
    return {
      name
    }   
  }
  
}
</script>
