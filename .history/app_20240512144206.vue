<template>
  <div>
    <h1>Hello World</h1>
    <label>Name</label><br>
    <input type="text" v-model="name" placeholder="name">
    <button @click="submit" >Submit</button>
    <p v-if="submitted">Hello, {{ name }}!</p>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  setup() {
    const name = ref('');
    const submitted = ref(false); 
    const submit = () => {
      submitted.value = true;
    }

    return {
      name,
      submitted,
      submit
    }   
  }
  
}
</script>  