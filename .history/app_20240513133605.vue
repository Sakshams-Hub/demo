<template>
  <div>
    <p>Users</p>
    <ul>
      <li v-for="user in users" :key="user.id" >{{ user.username }}</li>
    </ul>
  </div>
</template>

<script >
import { ref, onMounted } from "vue";
import axios  from "axios";

export default {
  setup() {

    const users = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        users.value = response.data
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching user:", error)
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { users };
  },
};
</script>  