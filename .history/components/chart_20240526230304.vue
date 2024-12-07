<template>
  <div>
    <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
import axios from 'axios';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref(null);
const chartOptions = ref({
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
});


onMounted(() => { 
    fetchData()
})

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/sales-per-day');
    const labels = response.data.labels.map((label) => label.split('T')[0]);
    const values = response.data.values;

    chartData.value = {
      labels,
      datasets: [{
        label: 'Orders per Day',
        data: values,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      }],
    };
  } catch (error) {
    console.error('Error fetching orders data:', error);
  }
};


</script>

<style>
div{
    width: 90%;
}
</style>
