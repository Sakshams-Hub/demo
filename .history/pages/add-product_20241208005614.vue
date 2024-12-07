<template>
  <div class="container">
    <p class="headline">ADD PRODUCT</p>
    <form @submit.prevent="addProduct" enctype="multipart/form-data">
      <label for="pname">Product Name</label>
      <input type="text" id="pname" name="product_name" placeholder="Product name" v-model="product.product_name"
        required />

      <label for="description">Description</label>
      <textarea id="description" name="description" placeholder="Write description.." style="height: 200px"
        v-model="product.description" required></textarea>

      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" placeholder="Quantity" v-model="product.quantity" required />

      <label for="price">Price</label>
      <input type="number" id="price" name="price" placeholder="Price" v-model="product.price" required />

      <label for="actual_price">Actual Price</label>
      <input type="number" id="actual_price" name="actual_price" placeholder="Actual Price"
        v-model="product.actual_price" required />

      <label for="image" class="file">Image</label><br /><br />
      <input type="file" id="image" name="image" @change="handleFileUpload" required /><br /><br />

      <button class="button" type="submit">Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const product = ref({
  product_name: '',
  description: '',
  quantity: 0,
  actual_price: 0,
  price: 0,
  image: null,
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  product.value.image = file;
};

const addProduct = async () => {
  const formData = new FormData();
  formData.append('product_name', product.value.product_name);
  formData.append('description', product.value.description);
  formData.append('quantity', product.value.quantity);
  formData.append('price', product.value.price);
  formData.append('actual_price', product.value.actual_price);
  formData.append('image', product.value.image);

  try {
    const response = await axios.post('http://localhost:5000/addproducts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Product added successfully', response);
    router.push('/products');
  } catch (error) {
    console.error('Error adding product:', error.response ? error.response.data : error.message);
  }
};
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
