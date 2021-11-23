<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-info">



        <div class="popup__content">

          <div class="popup__img">
            <img src="@/assets/img/error-modal.png" alt="">
          </div>

          <div class="popup__title">
            Oops..
          </div>

          <div class="popup__msg">
            {{message}}
          </div>

          <button class="page-btn" type="button" @click="closeWindow">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ErrorModal",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    closeWindow() {
      this.$emit("close");
    },
  }
}
</script>
