<template>
  <div class="counter">
    <button class="tang" @click="tang">tang</button>
    <button class="giam" @click="giam">giam</button>
    <hr />
    <br />
    <!-- <input type="text" :value="value" @input="updateValue" /> -->
    <input type="text" v-model="value" />
    <p>text tét : {{value}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  //computed chạy tr khi dữ liệu load
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
      // return this.$store.getters.value;
    }
  },
  methods: {
    tang() {
      this.$store.commit("incremantOp", 10);
    },
    giam() {
      this.$store.commit("decrement");
    },
    // updateValue(event) {
    //   this.$store.dispatch("updateValue", event.target.value);
    // },
    ...mapActions(["incrementAction"])
  }
};
</script>

<style>
</style>