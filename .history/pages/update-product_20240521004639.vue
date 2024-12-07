<template>
   
     <div class="container">
       <h1 class="headline">UPDATE PRODUCT</h1>
        <form action="#" @click="submit" enctype="multipart/form-data">
          <label for="pname">Product Name</label>
          <input
            type="text"
            id="pname"
            name="productname"
            placeholder="Product name.."
          
          />

          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Write description.."
            style="height: 200px"
        
          ></textarea>

          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Quantity"
       
          />

          <label for="price">Price</label>

          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
         
          />

          <label for="actual_price">Actual Price</label>
          <input
            type="number"
            id="actual_price"
            name="actual_price"
            placeholder="Actual Price"
          
          />

          <label for="image" class="file">Image</label><br /><br />
          <input
            type="file"
            id="image"
            name="ProductImage"
           
          />
          <br /><br />
          <button class="button" type="submit">Submit</button>
        </form>
      </div>
</template>
<script setup>
import  axios  from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
const productId = ref(router.currentRoute.value.params.productId);
const product = ref(null)

onMounted(async () => {
    await fetchdata(productId.value)
})

const fetchdata =  async (productId) => {
    try {
        const response = await axios.get(`http://localhost:5000//update-product/:productId`)
        product.value = response.data
    } catch (error) {
        console.error(error)
    }
}

</script>
<style>

.headline{
  margin-bottom:15px;
  margin-top: 0 
}

input[type=text],
input[type=number],
input[input=file],
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
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
</style>