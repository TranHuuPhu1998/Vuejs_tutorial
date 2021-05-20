<template>
    <div class="row">
        <div class="col-xs-12 col-md-6">
          <h1>Filter products From List component</h1>
          <input type="text" class="form-control" v-model="filterProduct">
          <div class="card-body">
            <ul>
              <li v-for="(product,index) in filteredProducts" :key="index">
                {{product}}
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
    import {productsMixin} from '../productMixin.js';
    export default {
        mixins : [productsMixin]
    }
</script>

<style>

</style>