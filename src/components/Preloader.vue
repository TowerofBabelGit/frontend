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
      <div class="preloader__text">
        <p class="title">Loading...</p>
        <p> Wait a few seconds</p>
      </div>
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


  &__text{
    font-size: 18px;

    line-height: 1.2;
    text-align: center;
    position: absolute;
    bottom: -8rem;
    left: 0;
    right: 0;
    margin: auto;
    padding-bottom: 30px;
    color: #C6B198;

    .title {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 7px;
    }
  }

}
.preloader-wrap{
  // max-height: 80vh;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-80%);

  svg {
    height: 80% !important;
  }
}

</style>
