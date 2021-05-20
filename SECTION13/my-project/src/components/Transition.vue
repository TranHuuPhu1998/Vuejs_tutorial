<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center"
      >
        <h1>Animation</h1>
        <hr />
        <select v-model="typeAntimation" class="form-control">
          <option value="fade">fade</option>
          <option value="slide-fade">slide-fade</option>
        </select>
        <hr>
        <button @click="show = !show" class="btn btn-block btn-success">
          Show notification
        </button>
        <br />
        <br />
        <!-- <transition :name="typeAntimation">
          <div class="alert alert-success" v-if="show">
            This is something about notification
          </div>
        </transition>
        <hr> -->
        <transition :name="typeAntimation" mode="out-in">
          <div class="alert alert-success bg-primary" v-if="show" key="bg-primary">
            This is something about danger
          </div>
          <div class="alert alert-warning bg-success" v-else key="bg-success">
            v-else
          </div>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <button class="btn btn-block btn-success" @click="show2 = !show2">
          Toggle render
        </button>
        <transition name="slide-fade" appear>
         <div class="alert alert-warning" v-if="show2">
            SHow transition
          </div>
        </transition>
                <br />
        <transition appear
                    enter-class=""
                    enter-active-class="animated zoomOutLeft"
                    leave-class=""
                    leave-active-class="animated slideInLeft"
        >
         <div class="alert alert-warning" v-if="show2">
            SHow transition
          </div>
        </transition>
             <button class="btn btn-success" @click="status =!status">
              Add or remove
            </button>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"

            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="LeaveCancelled"
          >
            <div class="transition" v-if="status"></div>
          </transition>

      </div>

    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2 : true,
      typeAntimation : "fade",
      status : false,
      elementWidth : 100,
      alertAnimation : "fade"
    };
  },
  methods : {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth= 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el,done){
      console.log("enter");
      let point = 1;
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth + point * 10) + 'px'
        point++;
        if(point > 40){
          clearInterval(interval);
          done();
        }
      },20);
    },
    afterEnter(el){
      console.log("afterEnter");
    },
    enterCancelled(){
      console.log(enterCancelled);
      
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 500;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el,done){
      console.log("leave");
      let point = 1;
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth - point * 10) + 'px';
        point++;
        if(point > 40){
          clearInterval(interval);
          done();
        }
      },20);
    },
    afterLeave(el){
      console.log("afterLeave");
    },
    LeaveCancelled(){
      console.log(LeaveCancelled);
      
    },
  }
};
</script>

<style>
/* enter vao*/
.transition{
  width: 500px;
  height: 100px;
  background-color: blueviolet;
}
.fade-enter {
  opacity: 0;
  transition: opacity 1s;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-fade-enter {
    opacity: o;
}
.slide-fade-enter-active {
    transition: all 1s;
    animation: slidein 1s ease-out forwards;
}
/* .slide-fade-leave {

} */
.slide-fade-leave-active {
     transition: all 1s;
    opacity: 0;
    animation: slideout 1s ease-out forwards;
}



@keyframes slidein {
    from{
        transform: translateY(40px);
    }
    to{
        transform: translateY(0);
    }
}

@keyframes slideout {
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(40px);
    }
}

</style>
