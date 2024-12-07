<template>
  <h1>My Dashboard</h1>
  <div class="container">
    <div class="users">
      <h1>Users: {{ users }} </h1>

    </div>

    <div class="products">
      <h1>Products: {{ products }} </h1>

    </div>
    <div class="orders">
      <h1>Orders: {{ orders }} </h1>

    </div>
    <div class="sales">
      <h1>Total Sales: {{ total }}</h1>

    </div>
  </div>

  <div class="recent">
    <div class="recent_orders">
      <h3>Recent Order</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in recentOrders" :key="order.id">
            <td>{{ order.order_id }}</td>
            <td>{{ order.customer_name }}</td>
            <td>{{ order.order_date }}</td>
            <td>₹ {{ order.total_amount }}</td>
          </tr>
        </tbody>
      </table>
      <button class="all_orders" @click="viewOrders">See All</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter()
const recentOrders = ref([])
const users = ref()
const products = ref()
const orders = ref()
const total = ref()

onMounted(() => {
  fetchRecentOrders();
  fetchUserCount();
  fetchProductCount();
  fetchOrdersCount();
  fetchTotalSales();
});

const fetchRecentOrders = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/orders/recent`)
    recentOrders.value = response.data
  } catch (error) {
    console.error("Error fetching orders:", error)
  }

};

const fetchUserCount = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/users/count`)
    users.value = response.data.userCount
  } catch (error) {
    console.error('Error fetching user count:', error)
  }
}

const fetchProductCount = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/products/count`)
    products.value = response.data.productCount
  } catch (error) {
    console.error("Error fetching product count:", error)
  }
}

const fetchOrdersCount = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/orders/count`)
    orders.value = response.data.orderCount

  } catch (error) {
    console.error("Error fetching orders count:", error)
  }
}

const fetchTotalSales = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/sales/total`)
    total.value = response.data.totalSales

  } catch (error) {
    console.error("Error fetching total sales:", error)
  }
}

const viewOrders = () => {
  router.push(`/orders`)
}
</script>
<style>
.container {
  display: flex;
}

.container div {
  display: flex;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.users {
  align-items: center;
  height: 80px;
  width: 200px;

  margin-left: 50px;
  border-radius: 10px;

  h1 {
    margin-top: 15px;
  }
}



.products {
  align-items: center;
  height: 80px;
  width: 200px;

  margin-left: 50px;
  border-radius: 10px;

  h1 {
    margin-top: 15px;
  }
}



.orders {
  align-items: center;
  height: 80px;
  width: 200px;

  margin-left: 50px;
  border-radius: 10px;

  h1 {
    margin-top: 15px;
  }
}



.sales {
  align-items: center;
  height: 80px;
  width: 370px;
  margin-left: 50px;
  border-radius: 10px;

  h1 {
    margin-top: 15px;
  }
}






.recent_orders {
  width: 80%;
  margin-left: 50px;
  margin-top: 50px;
  padding: 25px;
  border-radius: 5px;
  border: 1px solid rgb(239, 239, 239);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  height: auto;
}

h3 {
  font-size: 30px;
  font-weight: 800;
  font-family: monospace;
}

th,
td {
  padding: 10px;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table,
td,
th {

  text-align: left;
}

th {
  font-size: 25px;
  font-family: monospace;
  font-weight: 800;
}

td {
  font-size: 20px;
  font-family: monospace;
  font-weight: 800;
}

.all_orders {
  margin-top: 20px;
  height: 35px;
  width: 90px;
  border-radius: 10px;
  font-size: 15px;
  background-color: black;
  color: white;
}
</style>