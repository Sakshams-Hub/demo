<template>
  <div>
    
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