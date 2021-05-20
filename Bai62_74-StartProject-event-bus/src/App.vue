<template>
  <div id="app">
    <h1> App component </h1>
    <Header/>
    <ServerComponent/> 
    <Contact/>
  </div>
</template>

<script>

import Footer from './Shared/Footer.vue';
import Header from './Shared/Header.vue';
import ServerComponent from './Server/Server.vue';
import Contact from './components/Contact.vue';


export default {
    components : {
      "Footer" : Footer,
      "Header" : Header,
      "ServerComponent" : ServerComponent,
      "Contact" : Contact,
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
