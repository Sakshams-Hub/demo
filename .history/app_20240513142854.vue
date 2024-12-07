<!-- <template>
  <div class="container">
  <div class = "users" >
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
      
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.user_id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email_id }}</td>

        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<style>
.container {
  background-color: white;
}
.users{
  margin-top: 20px;
  border: 1px solid black;
 
  color: black;
  width: 500px;
}
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
</style>

<script >
import { ref, onMounted } from "vue";
import axios  from "axios";

export default {
  setup() {
  const users = ref([]);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
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
 -->


 <!-- pages/index.vue -->
<template>
  <div>
    <!-- Include the sidenav component -->
    <sidenav></sidenav>

    <!-- Your page content here -->
    <div>
      <h1>Welcome to my website</h1>
      <!-- Other content -->
    </div>
  </div>
</template>

<script>
import Sidenav from '~/components/sidenav.vue';

export default {
  components: {
    Sidenav, // Registering the sidenav component
  },
  // Other page logic goes here
}
</script>

<style>
/* Page-specific styles */
</style>
