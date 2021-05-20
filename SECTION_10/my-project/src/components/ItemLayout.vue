<template>
      <div class="row ">
        <Items v-for="(item,index) in items" 
        :key="index"
        @click.native="removeItem(index)"
        >
            {{item}}
        </Items>
      </div>
</template>

<script>
import Items from './Items.vue';

export default {
    props : ['items'],
    components :{
        Items,
    },
    methods : {
        removeItem(index){
            this.$emit('ItemIndex',index)
        }
    }
}
</script>

<style scoped>

</style>