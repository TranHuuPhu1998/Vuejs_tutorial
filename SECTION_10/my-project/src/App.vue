<template>
  <div id="app" class="container">
      <Header :itemCount="items.length" :maxItem="maxItem"></Header>
      <NewItem @itemNew="addItem" :ItemApp="items">
      </NewItem>
      <Itemslayout 
      @ItemIndex="ItemIndex"
      :items="items">
      </Itemslayout>
      <div class="row mt-3 centerDelete">
        <div class="col-sm-6 text-center">
          <div class="alert alert-info">
            Info : Click on a Item to delete
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Itemslayout  from './components/ItemLayout.vue';
import NewItem from './components/NewItem';
export default {
  name: 'App',
  data:function(){
    return {
      items:[

      ],
      maxItem : 10
    }
  },
  components : {
    Itemslayout,
    NewItem,
    Header
  },
  methods : {
    addItem(item){
      if(this.items.length >= this.maxItem){
        return alert('Please remove item firse');
      }
      this.items.push(item);
    },
    ItemIndex(index){
      this.items.splice(index,1);
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .centerDelete{
    display: flex;
    justify-content: center;
  }
</style>
