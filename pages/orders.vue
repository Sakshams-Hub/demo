<template>
    <h1>Orders</h1>
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
            <tr v-for="order in orders" :key="order.id">
                <td>{{ order.order_id }}</td>
                <td>{{ order.customer_name }}</td>
                <td>{{ order.order_date }}</td>
                <td>₹ {{ order.total_amount }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import axios from 'axios';

const orders = ref([]);

onMounted(() => {
    fetchData()
});

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/orders/all');
        orders.value = response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

</script>


<style>
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
    border: 1px solid #ddd;
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
