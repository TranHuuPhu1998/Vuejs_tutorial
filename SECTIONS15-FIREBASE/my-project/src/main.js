// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root= 'https://vue-from-a5351.firebaseio.com'

Vue.http.interceptors.push((request, next)=>{
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'POST'
  }
  next(response=>{
    request.json=()=>{
      return {
        message : response.body
      }
    }
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
