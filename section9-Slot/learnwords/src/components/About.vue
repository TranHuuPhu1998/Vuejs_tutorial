<template>
    <div>
      <h1>This is About Page</h1>
    </div>
</template>

<script>
export default {
    name:"About",
    deactivated(){
        console.log("deactivated About component");
    },
    activated(){
        console.log("Active About component");
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