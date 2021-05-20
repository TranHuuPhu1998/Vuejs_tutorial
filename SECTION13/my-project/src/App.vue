<template>
  <div>
    <TransitionAnimation/>
    <div>
      <h1> Filters local</h1>
      <h2>{{text | toLowerCase | to-uppercase}}</h2>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-6">
          <h1>Filter products</h1>
          <input type="text" class="form-control" v-model="filterProduct">
          <div class="card-body">
            <ul>
              <li v-for="(product,index) in filteredProducts" :key="index">
                {{product}}
              </li>
            </ul>
          </div>
        </div>
    </div>

    <div class="row">

        <div  class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
          <button 
          @click=" seletedComponent == 'SuccessAlert' ? 
          seletedComponent = 'DangerAlert': 
          seletedComponent= 'SuccessAlert' "
          class="btn btn-block btn-primary"> Submit </button>
        </div>
        <hr>
        <transition name="fade" mode="out-in">
          <component :is="seletedComponent">

          </component>
        </transition>
        

    </div>
      <div class="row"> 
        <div  class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <button class="btn btn-block btn-warning"
          @click="AddItem"
        >Add item</button>
        <ul class="list-group"> 
          <transition-group name="fade">
            <li class="list-group-item list-item" v-for="(number ,index) in numbers" :key="index"
                @click="removeItem(index)"
            >
              {{number}}
              ass
            </li>
          </transition-group>
        </ul>
          </div>
        </div>
    <List/>
  </div>

</template>

<script>
import List from './components/List.vue';
import {productsMixin} from './productMixin.js'
import TransitionAnimation from './components/Transition.vue';
import SuccessAlert from './components/SucessAlert';
import DangerAlert from './components/DangerAlert';
export default {
  mixins : [productsMixin],
  data : function(){
    return {
      text : "How To filters local",
      seletedComponent:'',
      numbers : ['1','2','3','4','5']
    }
  },
  methods:{
    AddItem(){
      const pos = Math.floor(Math.random() + this.numbers.length);
      this.numbers.splice(pos,0,this.numbers.length + 1)
    },
    removeItem(index){
      this.numbers.splice(index,1)
    }
  },
  filters:{
    toLowerCase(text){
      return text.toLowerCase();
    }
  },
  components:{
    List,
    TransitionAnimation,
    DangerAlert,
    SuccessAlert
  },
  created(){
    console.log('created')
  }
}
</script>

<style>
.list-item{
  cursor: pointer;
}
</style>