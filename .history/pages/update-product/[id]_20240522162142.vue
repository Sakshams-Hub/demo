<template>
   
     <div class="container" v-if="product">
       <p class="headline">UPDATE PRODUCT</p>
        <form action="#" @click="submit" enctype="multipart/form-data">
          <label for="pname">Product Name</label>
          <input
            type="text"
            id="pname"
            name="productname"
            placeholder="Product name.."
            v-model="product.product_name"
          
          />

          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Write description.."
            style="height: 200px"
            v-model="product.product_description"
        
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
const id = ref(router.currentRoute.value.params.id);
const product = ref(null)

onMounted(async () => {
    await fetchdata(id.value)
})

const fetchdata =  async (id) => {
    try {
        const response = await axios.post(`http://localhost:5000/update-product/${id}`)
        product.value = response.data
    } catch (error) {
        console.error(error)
    }
}

</script>
<style>

.headline{
  margin-bottom:15px;
  margin-top: 0 ;
  font-size: 25px;
  font-family: monospace;
  text-align: center;

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