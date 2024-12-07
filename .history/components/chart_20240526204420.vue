<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Chart data and options
const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39]
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
