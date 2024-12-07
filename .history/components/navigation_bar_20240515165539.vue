<template>
 <div class="nav">
  <button type="button" >Dashboard</button>
  <button @click="navigateToDashboard">Products</button>
  <button type="button">Add Products</button>
  <button type="button">Orders</button>
  <button type="button">Stats</button>
  </div>
 </template>
<script setup>

import { useRouter } from "vue-router";
const router = useRouter();

const navigateToDashboard = () => {
  router.push('/products');
}

</script>


<style>
.nav{
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  width: 100%;
  height:60px ;
  
}

.nav button{
  border: none;
  background-color: transparent;
  padding: 5px;
  margin-left: 20px;
  font-size: 20px;
  
}
</style>