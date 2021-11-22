<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-info">
        


        <div class="popup__content">

          <div class="popup__img">
            <img src="@/assets/img/success-modal.png" alt="">
          </div>

          <div class="popup__title">
            Success
          </div>

          <div class="popup__msg">
            Lorem ipsum dolor sit amet
          </div>

          <button class="page-btn" type="button" @click="closeWindow">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SuccessModal",
  data: () => ({

  }),
  methods: {
    closeWindow() {
      this.$emit("close");
    },
  }
}
</script>
