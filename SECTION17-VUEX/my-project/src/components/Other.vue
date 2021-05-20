<template>
  <div id="result">
    <p>
      this is result : {{ tenResult}}
    </p>
        <p>
      this is result : {{ nameResult }}
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {...mapGetters(["tenResult","nameResult"])}
}
</script>

<style>

</style>