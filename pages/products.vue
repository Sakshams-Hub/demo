<template>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product">
            <img class="product-image" :src="`http://localhost:5000/${product.image.replace(/\\/g, '/')}`"
                alt="Product Image">

            <div class="example-content">
                <!-- Product Name -->
                <h3 mat-card-title class="product-name">
                    {{ product.product_name }}
                </h3>
                <!-- Product Price -->
                <p class="product-price">
                    ₹ {{ product.actual_price }}
                    <span class="original-price">{{ product.price }}</span>
                </p>
            </div>
            <button class="view" @click="updateProduct(product.id)">Update</button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
const products = ref([]);

onMounted(() => {
    fetchProducts();
})

const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/getproducts')
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

const updateProduct = (productId) => {
    router.push(`/update-product/${productId}`);
}
</script>

<style>
.product-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;

}

.product {
    border: 1px solid #000000;
    padding: 20px;
    text-align: center;
    width: 300px;
    margin-left: 10px;
    height: auto;
    margin-top: 15px;

}


.example-content {
    height: 125px;
}

.product-price {
    font-size: 1.1rem;
    margin: 10px 0;
}

.original-price {
    text-decoration: line-through;
    color: #999;
}

.product-name {
    font-size: 1.2rem;
    margin: 10px 0;
}

.product-image {
    border: 1px solid black;
    height: 200px;
    object-fit: contain;
}

.view {
    height: 40px;
    width: 100px;
    border-radius: 5px;
    background-color: white;
    font-size: 17px;
}

.view:hover {
    height: 40px;
    width: 100px;
    border-radius: 5px;
    background-color: black;
    font-size: 17px;
    color: white;
}
</style>