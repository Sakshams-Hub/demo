<template>
  <div>
  <div >
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
.users{
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid black;
  background-color: aliceblue;
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