<template>
  <div>
      <h1>User Deatail</h1>
      <h2>UserId : {{id}}</h2>
      <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, magnam nihil culpa laboriosam a vitae voluptate aspernatur, provident explicabo,
          alias error voluptatem nulla itaque facere reiciendis libero saepe! Excepturi, amet.
      </p>
       <!-- :to="id + '/edit'" -->
      <router-link
        :to="link"
        tag="button"
        >
          Edit User
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id : this.$route.params.id,
            link :{ 
                name: 'UserEdit', 
                params :{ id : this.$route.params.id} ,
                query : {locate :'vi', brower :'chorme'} ,
                hash : '#react'
            }
        }

    },
    // trước khi router xuất hiện trên đừng link thì can thiệp
    beforeRouteEnter(to,from,next){
        if(true){
            next()
        }else{
            next(false)
        }
    }
}
</script>

<style>

</style>