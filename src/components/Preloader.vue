<template>
  <div class="preloader">
    <div class="preloader-wrap">
      <LottieAnimation
          path="preloader.json"
          :loop="true"
          :autoPlay="true"
          :speed="1"
          :width="150"
      ></LottieAnimation>
    </div>

  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  name: "Preloader",
  components: {
    LottieAnimation
  },


};
</script>

<style scoped lang="scss">
.preloader{
  position: fixed;
  z-index: 99994;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background:rgba(0,0,0,0.8);

}
.preloader-wrap{
  // max-height: 80vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  svg {
    height: 80% !important;
  }
}

</style>
