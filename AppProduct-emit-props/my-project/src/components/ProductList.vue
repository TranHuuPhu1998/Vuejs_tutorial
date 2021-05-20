<template>
  <div class="productList-center">
    <!-- product-Item -->
    <ProductItem :ListProducts="ListProducts"/>
  </div>
</template>

<script>
  let ListProducts = [
      {
        id: 1,
        name: "Record Video",
        done: false,
        price : 100
      },
      {
        id: 2,
        name: "Upload Video",
        done: false,
        price : 120
      },
      {
        id: 3,
        name: "partayy",
        done: false,
        price : 40
      },
      {
        id: 4,
        name: "Debug",
        done: false,
        price : 30
      },
      {
        id: "5",
        name: "More Debug",
        done: false,
        price : 30
      }
  ];
import ProductItem from './ProductItem.vue';
export default {
    name:"ProductList",
    data : function(){
      return {
        ListProducts,
      }
    },
    components : {
      ProductItem,
    }
};
</script>

<style scoped>
  .productList-center{
    display: flex;
    justify-content: center;
  }
</style>

