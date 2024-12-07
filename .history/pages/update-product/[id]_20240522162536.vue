<template>
  <div class="container">
    <p class="headline">UPDATE PRODUCT</p>
    <form @submit.prevent="updateProduct" enctype="multipart/form-data">
      <label for="pname">Product Name</label>
      <input
        type="text"
        id="pname"
        name="product_name"
        v-model="product.product_name"
        required
      />

      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        v-model="product.description"
        required
      ></textarea>

      <label for="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        v-model="product.quantity"
        required
      />

      <label for="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        v-model="product.price"
        required
      />

      <label for="actual_price">Actual Price</label>
      <input
        type="number"
        id="actual_price"
        name="actual_price"
        v-model="product.actual_price"
        required
      />

      <label for="image" class="file">Image</label><br /><br />
      <input
        type="file"
        id="image"
        name="image"
        @change="handleFileUpload"
      /><br /><br />

      <button class="button" type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const product = ref({
  product_name: '',
  description: '',
  quantity: 0,
  price: 0,
  actual_price: 0,
  image: null,
});

const fetchProduct = async () => {
    const { productId } = route.params;
    console.log("Product Id:",id);
  try {
    const response = await axios.get(`http://localhost:5000/products/${productId}`);
    Object.assign(product.value, response.data);
  } catch (error) {
    console.error('Error fetching product:', error.response ? error.response.data : error.message);
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  product.value.image = file;
};

const updateProduct = async () => {
  const formData = new FormData();
  formData.append('product_name', product.value.product_name);
  formData.append('description', product.value.description);
  formData.append('quantity', product.value.quantity);
  formData.append('price', product.value.price);
  formData.append('actual_price', product.value.actual_price);
  if (product.value.image) {
    formData.append('image', product.value.image);
  }

  const { productId } = route.params;
  try {
    await axios.put(`http://localhost:5000/update-product/${productId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    router.push('/products');
  } catch (error) {
    console.error('Error updating product:', error.response ? error.response.data : error.message);
  }
};

onMounted(fetchProduct);
</script>

<style scoped>
.headline {
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 25px;
  font-family: monospace;
  text-align: center;
}

input[type="text"],
input[type="number"],
input[type="file"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.container {
  border-radius: 10px;
  background-color: #ffffff;
  padding: 25px;
  height: auto;
  width: 500px;
  margin-top: 8px;
  margin-left: 60vh;
  border: 1px solid #ddd;
}

button {
  width: 95px;
  height: 35px;
  background-color: white;
  font-size: 17px;
}
button:hover {
  background-color: black;
  color: white;
}
</style>
