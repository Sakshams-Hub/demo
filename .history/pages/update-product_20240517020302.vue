<template>
    <h1>Update Product</h1>
     <div class="container">
        <form action="#"  enctype="multipart/form-data">
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
</script>
<style>
</style>