<template>
  <div>
    <p>Users</p>
    <ul v-if="!error">
      <li v-for="user in users" :key="user.id" >{{ user.username }}</li>
    </ul>
    <p v-else>Error: {{ error }}</p>
  </div>
</template>


<script >
import { ref, onMounted } from "vue";
import axios  from "axios";

export default {
  setup() {
  const users = ref([]);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      users.value = response.data;
      console.log(users.value);
    } catch (error) {
      console.error("Error fetching user:", error);
      error.value = error.message;
    }
  };

  onMounted(() => {
    fetchData();
  });

  return { users, error }; // Return error from setup function
}

};
</script>  