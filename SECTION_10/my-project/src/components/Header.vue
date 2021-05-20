<template>
  <div class="row">
      <div class="col-sm-12">
          <h3>Created My Note</h3>
            <div class="progress barHeight">
            <div class="progress-bar" role="progressbar" :style="{width: (itemCount / maxItem)* 100 + '%' }">
            {{(itemCount / maxItem)* 100 + '%'}}
            </div>
            </div>

      </div>
  </div>
</template>

<script>

export default {
    props : ['itemCount','maxItem']
}
</script>

<style scoped>
    .barHeight{
        height: 50px;
        background: rebeccapurple;
    }
</style>