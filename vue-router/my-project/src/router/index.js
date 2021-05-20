import Vue from 'vue'
import Router from 'vue-router'
import Data from '../components/Data'
import Header from '../components/Header'

const User = resolve =>{
  require.ensure(['../components/User'], ()=>{
    resolve(require('../components/User'))
  },'user')
}


const UserStart = resolve =>{
  require.ensure(['../components/index'], ()=>{
    resolve(require('../components/index'))
  },'user')
}


const UserEdit = resolve =>{
  require.ensure(['../components/UserEdit'], ()=>{
    resolve(require('../components/UserEdit'))
  },'user')
}


const UserDetail = resolve =>{
  require.ensure(['../components/UserDetail'], ()=>{
    resolve(require('../components/UserDetail'))
  },'user')
}

// import User from '../components/User'
// import UserDetail from '../components/UserDetail'
// import UserEdit from '../components/UserEdit'
// import UserStart from '../components/index'

import notFound from '../components/notFound'
Vue.use(Router)

const router = new Router({
  mode : "history",
  scrollBehavior(to,from,savePosition){
    if(savePosition){
      return savePosition
    }
    if(to.hash){
      return {selector : to.hash}
    }
  },
  routes: [
    {
      path: '/',
      name: 'homepage',
      components:{
        default : Data,
        'header' : Header
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children:[
        {
          path: '',
          name: 'index',
          component: UserStart
        },
        {
          path: ':id',
          name: 'UserDetail',
          component: UserDetail,
          beforeEnter : (to,from,next)=>{
            console.log('action route guards');
            next()
          }
        },
        {
          path: ':id/edit',
          name: 'UserEdit',
          component: UserEdit
        },
      ]
    },
    { path: '/auth-redirect', redirect: { name : 'homepage'}}
    ,
    { path: '/404', name : 'notFound' , component : notFound },
    { path: '*' , redirect : '/404'}

  ]
})
// beforeEnter
// component đã chuyển hướng rồi render ra giao diện


// mổi một lần trước khi chay router
router.beforeEach((to ,from ,next)=>{
  console.log('Global route guards');
  next()
})
export default router;