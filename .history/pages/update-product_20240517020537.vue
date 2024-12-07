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
input[type=text],
input[type=number],
input[input=file],
select,
textarea {
    width: 100%;
    /* Full width */
    padding: 12px;
    /* Some padding */
    border: 1px solid #ccc;
    /* Gray border */
    border-radius: 4px;
    /* Rounded borders */
    box-sizing: border-box;
    /* Make sure that padding and width stays in place */
    margin-top: 6px;
    /* Add a top margin */
    margin-bottom: 16px;
    /* Bottom margin */
    resize: vertical
        /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}



/* Add a background color and some padding around the form */
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