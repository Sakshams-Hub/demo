<template>
  <div>
    
  </div>
</template>

<script >
import { ref, onMounted } from "vue";
import axios  from "axios";

export default {
  setup() {
      users = ref([])

    const fetchData = async () => {

        try {
          const response = await axios.get('http://localhost:3000/users');
          users.value = response.data
        } catch (error) {
          console.error("Error fetching user:",error)
        }
      
      }

  }
  
}
</script>  