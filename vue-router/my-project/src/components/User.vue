<template>
  <div>
    <h1>
        User Page
    </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eius. Vitae at cumque saepe eaque eos aut nobis ratione iure i
          taque perspiciatis rerum facere, cupiditate doloremque. Officiis consequatur accusantium ipsum?
      </p>
      <div class="form-group">
            <button 
            @click="backhome"
            type="button" class="btn btn-primary btn-lg btn-block">go to home</button>
               <button 
            @click="gotodetails"
            type="button" class="btn btn-primary btn-lg btn-block">go to UserDetails</button>
      </div>
      <ul>
        <router-link
        tag='li'
        to='user/1'
        >
        User 1
        </router-link>
         <router-link
        tag='li'
        to='user/2'
        >
          User 2
        </router-link>
         <router-link
        tag='li'
        to='user/3'
        >
         User 3
        </router-link>
      </ul>

      <router-view/>
  </div>

</template>

<script>

export default {
  methods:{
    backhome(){
      this.$router.push('/')
    },
    gotodetails(){
      this.$router.push('/user/1')
    }
  },
}
</script>

<style>

</style>