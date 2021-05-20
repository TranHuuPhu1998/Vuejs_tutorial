<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <div class="card-body item">
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card-body{
      font-family: 'Courier New', Courier, monospace;
      font-size: 24px;
      color: #6e6e6e;
    }
    .card{
      margin-top: 20px;
    }
    .item{
      cursor: pointer;

    }
    .item:hover{
      background-color: #ffe2e2;
    }
</style>