<template>
  <div id="result">
    <p>this is result : {{ tenResult}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["tenResult"]) }
};
</script>

<style>
</style>