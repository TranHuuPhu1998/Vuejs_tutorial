<template>
  <div>
    <div class="col-sm-9">
      <h1>Default / Built in Directive</h1>
      <b v-text="'how to v-text'"></b>
      <p v-html="'<h1>This is heading : v-html </h1>'"></p>
    </div>
    <div class="col-sm-9">
      <h1>Default / Built in Directive</h1>
      <p v-custom:background.delayed="'yellow'">hightlight</p>
      <p v-local-Custom:background.delayed.blink="{mainColor : 'red',secondColor: 'green',
      delay:500}">
        hightlight Directives local
      </p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-Custom": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currenColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currenColor == secondColor
                ? (currenColor = mainColor)
                : (currenColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currenColor;
              } else {
                el.style.color = currenColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style></style>
