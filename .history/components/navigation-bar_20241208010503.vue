<template>
  <div class="nav">
    <button @click="navigateToDashboard">Dashboard</button>
    <button @click="navigateToProduct">Products</button>
    <button @click="navigateToAddProduct">Add Products</button>
    <button @click="navigateToOrders">Orders</button>
    <button @click="navigateToStats">Stats</button>
    <button></button>
  </div>
</template>
<script setup>

import { useRouter } from "vue-router";
const router = useRouter();

const navigateToDashboard = () => {
  router.push('/');
}

const navigateToProduct = () => {
  router.push('/products');
}


const navigateToAddProduct = () => {
  router.push('/add-product');
}

const navigateToOrders = () => {
  router.push('/orders');
}

const navigateToStats = () => {
  router.push('/stats');
}

</script>


<style>
.nav {
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  width: 100%;
  height: 60px;

}

.nav button {
  border: none;
  background-color: transparent;
  padding: 5px;
  margin-left: 20px;
  font-size: 20px;

}
</style>