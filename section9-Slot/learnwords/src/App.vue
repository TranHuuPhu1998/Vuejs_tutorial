<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button 
            class="btn btn-outline-danger"
            @click="seleedComponent = 'Card'"
            >Card 
          </button>
          <button 
            class="btn btn-outline-danger"
            @click="seleedComponent = 'Contact'"
          >Contact 
          </button>
          <button 
            class="btn btn-outline-danger"
            @click="seleedComponent = 'About'"
          >About 
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div>
            <h2>{{seleedComponent}}</h2>
          </div>
          <!-- <Card cardWords="Catt">
            <h2 slot="title">{{CardTitle}}</h2>
            <p slot="content"> Can you for one slot</p>
            <p> Default slot </p>
            <p> Default slot </p>
          </Card> -->
          <keep-alive>
             <component :is="seleedComponent"></component>
          </keep-alive>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';
export default {
  data : function(){
    return {
      CardTitle : "How to While Cat",
      seleedComponent : 'Card'
    }
  },
  components : {
    Card,
    Contact,
    About
  }
}
</script>

<style>

</style>