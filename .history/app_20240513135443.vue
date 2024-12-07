<template>
  <div>
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
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