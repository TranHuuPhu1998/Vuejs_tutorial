<template>
  <div class="container">
     <div class="row">
             <div class="col-xs-6 col-sm-6">
        <div class="form-group">
          <h1>Chon Data để get</h1>
          <input type="text" class="form-control" v-model="node">
        </div>
             </div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-sm-6">
        <h1 class="text-center">CREATE USER</h1>
        <div class="form-group">
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" v-model="user.email">
        </div>

         <button class="btn btn-block btn-success"
                @click="submit">Submit
        </button>
          
        <hr>
        <h1>GetAllUser</h1>
        <hr>
        <button
         class="btn btn-block btn-warning"
         @click="GetAllUser"
        >
        Get all User
        </button>
        <ul class="list-group">
          <li class="list-group-item"
              v-for="(user,index) in users"
              :key="index"

          >
          <p>username : {{user.name}} </p>
          <p>email : {{user.email}}</p>
          <button @click="removeItems(user.id)" class="btn btn-outline-primary"> removeItem </button>
          </li>
        </ul>
       
      </div>
       <div class="col-xs-6 col-sm-6">
        <h1>CREATE DATA</h1>
        <div class="form-group">
          <input type="text" class="form-control" v-model="data.cate">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" v-model="data.color">
        </div>

         <button class="btn btn-block btn-success"
                @click="submitData">Submitdata
        </button>
                <hr>
        <h1>GetAlldata</h1>
                <hr>
          <button
         class="btn btn-block btn-warning"
         @click="GetAllData"
        >

        Get all Data
        </button>
        <ul class="list-group">
          <li class="list-group-item"
              v-for="(data,index) in datas"
              :key="index"
              @click="removeItemsData(data.id)"
          >
          <p>username : {{data.cate}} </p>
          <p>email : {{data.color}}</p>
          <button  @click="removeItemsData(data.id)" class="btn btn-outline-primary" > removeItem </button>
          </li>
        </ul>

        </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      user :
        {
          name:'',
          email:'',
          id : 1
        }
      ,
      data : 
        {
          cate:'',
          color:'',
          id : 1
        }
      ,
      users:[],
      resource:{},
      node:'',
      datas : []
    }
  },
  computed(){

    
  },
  methods:{
    removeItems (itemsId){
      console.log(itemsId);
      this.$http.delete('user.json', { params: { id: itemsId }})
      .then((response) => {
        this.msg = response.msg;
      });
    },
    removeItemsData (itemsId){
      console.log(itemsId);
      this.$http.delete('data.json', { params: { id: itemsId }})
      .then((response) => {
        this.msg = response.msg;
      });
    }
,
    submit(){
      // console.log('submit',this.user);
      // this.$http.post('',this.user)
      //   .then(res=>{
      //     console.log(res);   
      //   },error=>{
      //     console.log(error)
      //   })
      this.user.id = Math.floor((Math.random() * 1000 ) + (Math.random() * 1000) + (Math.random() * 1000))
      this.resource.createItem(this.user);
      
    },
    submitData(){
        this.data.id = Math.floor((Math.random() * 1000 ) + (Math.random() * 1000) + (Math.random() * 1000))
        this.resource.createItemData(this.data)
    },
   
    GetAllData(){
        this.resource.getNodeData()
        .then(res=>{
          return res.json()
        })
        .then(data =>{
          for(let key in data){
             this.datas.push(data[key])
          }
        })
         
      },
    GetAllUser(){
        this.resource.getNodeUser()
        .then(res=>{
          return res.json()
        })
        .then(data =>{
          for(let key in data){
             this.users.push(data[key])
          }
        })
    }

  },

  created(){
    const customActions = {
      createItem : { method : 'POST',url : 'user.json'},
      createItemData : { method : 'POST',url : 'data.json'},
      getNodeData : {method : 'GET', url : 'data.json'},
      getNodeUser : {method : 'GET', url : 'user.json'},
    }
    this.resource = this.$resource('{node}.json',{},customActions);
    // this.GetAllUser();
    //  this.GetAllData();
  },
}
</script>

<style>

</style>
