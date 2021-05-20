<template>
  <div id="app">
    <h1>Data Contact</h1>
    <p>My address : {{ address }}</p>
    <hr>
    <button @click="changePhone()">
        Show My Phone
    </button>
    <hr>
    <button @click="resetAge()">resetAge</button>
    <button @click="resetCallback()">resetCallback</button>
    <hr>
    <h2 >My Age : {{customAge}}</h2>

  </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
  // prop truyen data tu component father to children
  // component children truyen event to father

    props : {
      customAge : Number,
      resetCallback : Function
    },
    data : function(){
        return {
            address : "Quang Phu - Quang Dien - TT Hue",
            toggle : false,
     
        }
    },
    methods : {
        changePhone(){
            this.toggle = !this.toggle
            if(this.toggle == true){
                this.address = "019191919191919"
            }else{
                this.address = "Quang Phu - Quang Dien - TT Hue"
            }
 
        },

    },
    created(){
      eventBus.$on('myage',(age)=>{
        this.customAge = age
    })
  }
}
</script>
<style scoped>
  div{
    border: 1px solid #a0c010;
  }
</style>
