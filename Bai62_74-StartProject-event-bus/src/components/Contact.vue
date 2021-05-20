<template>
  <div id="app">
    <h1 >{{reset}}</h1>
    <datacontactComponent :customAge="ageCustom" v-on:reset="reset = $event" :resetCallback="resetCallback"/>
    <ItemContact :contactAge="ageCustom"/>
  </div>
</template>

<script>
import DataContact from './DataContact.vue';
import ItemContact from './ItemContact.vue'
export default {
    data : function(){
      return {
        ageCustom : 12,
        reset : "reset",
        age : 10,
 
      }
    },

    methods : {
      resetCallback(){
        this.reset = "reset callback fun"
      }
    },
    components : {
        'datacontactComponent' : DataContact,
        'ItemContact':ItemContact
    }
}
</script>

<style scoped>
  div{
    border: 1px solid #311f83;
  }
</style>
