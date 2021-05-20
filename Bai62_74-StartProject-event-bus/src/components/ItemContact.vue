<template>
  <div id="app">
      <h2>May age Contact: {{contactAge}}</h2>
      <input type="text" name="ageinput" @input="update">
      <button @click="resetAge">resetAge</button><br>
      <hr>

  </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
  props : {
    contactAge : Number
  },
  data : function(){
    return {
      ageinput : ""
    }
  },
  methods :{
    resetAge : function() {
      console.log(this.contactAge);
          this.contactAge += this.ageinput;
          // eventBus.$emit('myage', this.contactAge);
          eventBus.changeAge(this.contactAge)
    },
    update : function(event){
      this.ageinput = parseInt(event.target.value);
    }
  },
}
</script>
<style scoped>
  div{
    border: 1px solid #a0c010;
  }
</style>
