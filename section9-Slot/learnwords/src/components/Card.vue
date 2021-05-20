<template>
    <div class="div">
        <h1>This is Card</h1>
        <div class="title">
            <slot name="title"></slot>  
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="slotDefault">
            <a href="https://discordapp.com/channels/404619467373412352/655409018256490514"><slot></slot></a>
        </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props : ['cardWords']
}
</script>

<style scoped>
    .slotDefault{
        border: 1px solid red;
        border-radius: 10px;
        background-color: #cccccc;
    }
    .div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
        padding: 10px;
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }
    h2{
        color: red;
    }
    .content{
        border: 1px solid #cccccc;
    }
</style>