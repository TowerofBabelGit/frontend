<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-buy">
        <button @click="closeWindow" class="popup__close"></button>

        <div class="popup__content">

          <div class="popup__title">
            Buy tower
            block
          </div>

          <form class="popup-form">
          <div class="page-input" :class="{error: isTitleError}">
            <input type="text" class="input" :placeholder="inputTitle">

            <div class="page-input__icon">
              <img src="@/assets/img/svg/icon-error.svg" alt="">
            </div>
          </div>
          <div class="page-input" :class="{error: isUrlError}">
            <input type="text" class="input" :placeholder="inputUrl">
            <div class="page-input__icon">
              <img src="@/assets/img/svg/icon-error.svg" alt="">
            </div>
          </div>
          <div class="page-input" :class="{error: isInvitorError}">
            <input type="text" class="input" :placeholder="inputInvitor">
            <div class="page-input__icon">
              <img src="@/assets/img/svg/icon-error.svg" alt="">
            </div>
          </div>

            <button class="page-btn" type="submit">Buy the block</button>
          </form>



        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BuyModal",
  data: () => ({
    isTitleError: false,
    isUrlError: false,
    isInvitorError: false,
    inputTitle: 'Title',
    inputUrl: 'Image URL',
    inputInvitor: 'Invitor address (optional)'
  }),
  methods: {
    closeWindow() {
      this.$emit("close");
    },
  }
}
</script>
