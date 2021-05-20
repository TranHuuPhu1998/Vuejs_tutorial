import Vue from 'vue'
// import Contact from './Contact.vue';
import App from './App.vue'
export const eventBus= new Vue({
  data:{

  },
  methods:{
    changeAge(age){
      this.$emit('myage',age);
    }
  }
});

// Vue.component('contact-component',Contact)

new Vue({
  el: '#app',
  render: h => h(App)
})
