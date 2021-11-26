<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup connect-wallet">
        <button @click="closeWindow" class="popup__close"></button>

        <div class="popup__content">

          <div class="popup__title">
            {{title }}
          </div>

          <div class="popup__text">
            {{msg}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoModal",
  props: {
    msg: {
      default: '',
    },
    title: {
      default: 'Buy tower block'
    }
  },
  methods: {
    closeWindow() {
      this.$emit("close");
    },
  }
}
</script>

<style scoped>

</style>