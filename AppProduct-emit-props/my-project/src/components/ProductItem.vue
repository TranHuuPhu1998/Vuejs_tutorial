<template>
    <div class="product">
    <div class="product-content" v-for="(ListProduct,index) in ListProducts" :key="index" >
        <img src="https://sketch2code.azurewebsites.net/Content/img/fake_img.svg" alt="">
        <div>
            <p>{{ListProduct.name}}</p>
            <p>{{ListProduct.price}}</p>
        </div>
        <button @click="AddtoCard(ListProduct.id)">App to Card</button>
    </div>

    </div>
</template>

<script>

let ListCardProducts=[]
import {eventBus} from '../main';
export default {
    name:'ProductItem',
    props : {
        ListProducts : Array,
    },
    data : function(){
        return {
            ListCardProducts : ListCardProducts,
        }
    },
    methods :{
        AddtoCard(id){
            this._props.ListProducts.forEach(element => {
                if(element.id === id){
                    this.ListCardProducts.push(element)
                }
            });
            console.log(this.ListCardProducts);   
            eventBus.$emit("ListCard",this.ListCardProducts);
        }
    }
}
</script>

<style scoped>
    .product{
        display: grid;
        grid-template-columns: repeat(3 ,1fr);
    }
    .product-content{
        margin: 0 30px;
    }
    .product-content img{
     width: 400px;
     height: 400px;
    }
</style>

