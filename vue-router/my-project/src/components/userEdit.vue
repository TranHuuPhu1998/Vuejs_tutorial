<template>
  <div>
      <h1>User Edit</h1>
      <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, magnam nihil culpa laboriosam a vitae voluptate aspernatur, provident explicabo,
          alias error voluptatem nulla itaque facere reiciendis libero saepe! Excepturi, amet.
      </p>
      <p>User Info Client :</p>
      <ul>
        <li>Locate : {{$route.query.locate}}</li>
        <li>Locate : {{$route.query.brower}}</li>
      </ul>
      <button 
      type="button" 
      class="btn btn-primary btn-lg btn-block"
      @click="show"
      >
        Something
      </button>
      <div style="height : 700px"></div>
      <h3 id="react">go to react</h3>
      <div style="height : 1700px"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      status : false
    }
  },
  methods:{
    show(){
      this.status = true;
      alert('hello')
    }
  },

  beforeRouteLeave: (to, from, next) => {
    if(this.status){
      next()
    }else{
      if(confirm('Are u sure ? Any data will not sava ')){
        next()
      }else{
        next(false)
      }
    }
  }
}
</script>

<style>

</style>