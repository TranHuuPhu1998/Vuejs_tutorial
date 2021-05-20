<template>
  <div id="app">
    <div>
      <router-view name='header'/>
      <ul>
          <!-- <router-link 
          tag="li"
          active-class="active"
          class="nav-item"
          to='/'
          exact
          >home page</router-link>

          <router-link 
          tag="li"
          active-class="active"
          class="nav-item"
          to='/user'>User</router-link> -->

          <!-- <router-link 
          tag="li"
          active-class="active"
          class="nav-item"
          to='/user/10'>Admin</router-link> -->
      </ul>
    </div>
    <img src="./assets/logo.png">
    <transition name="slide">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .slide-leave-active{
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
  }
  .slide-leave{
    opacity: 1;
    transform: translateX(0);
  }
  @keyframes slide-out {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(50px);
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;;
}
.active{
  color: red;
}
.nav-item{
  width: 100px;
  height: 40px;
}
ul li{
  list-style: none;
  cursor: pointer;
}
</style>
