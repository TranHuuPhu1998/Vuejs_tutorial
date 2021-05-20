<template>
  <div>
      <h1>This is Contact Page</h1>
      <button @click="counter++"> Tang </button>
      <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
    name:"Contact",
        data : function(){
        return {
            counter : 0
        }
    },
    created(){
        console.log("Created");
    },
    destroyed(){
        console.log("destroyed");
    },
    deactivated(){
        console.log("deactivated Contact Component");
    },
    activated(){
        console.log("Active Contact Component");
    }
}
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
        padding: 10px;
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }
</style>