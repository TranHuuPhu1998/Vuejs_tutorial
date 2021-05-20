<template>
  <div>
    <h1>Card product</h1>
    <div class="title">
      <p>Img</p>
      <p>Price</p>
      <p>Name</p>
    </div>
    <div class="cart-product" v-for="(ListCard,index) in ListCards" :key="index">
      <p>
        <img src="https://sketch2code.azurewebsites.net/Content/img/fake_img.svg" alt />
      </p>
      <p>{{ListCard.price}}</p>
      <p>{{ListCard.name}}</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
let ListCards = [];
export default {
  name: "CardProduct",
  data: function() {
    return {
      ListCards
    };
  },
  created() {
    console.log(this.ListCards);

    eventBus.$on("ListCard", product => {
      this.ListCards = product;
    });
  }
};
</script>

<style scoped>
.cart-product {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}
.cart-product img {
  width: 100px;
  height: 100px;
}
.title {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}
p {
  border: 1px solid brown;
}
</style>

