// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

Vue.directive("custom", {
  bind(el, binding, vnode) {
    var dalay = 0;
    if (binding.modifiers["delayed"]) {
      dalay = 3000;
    }
    if (binding.modifiers["blink"]) {
      let mainColor = binding.value;
      let secondColor = 'blue';
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
        }, 300);
      }, delay);
    } else {
      setTimeout(() => {
        if (binding.arg == "background") {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, dalay);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
