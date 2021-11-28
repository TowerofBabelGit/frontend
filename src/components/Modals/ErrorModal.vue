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
            {{title}}
          </div>

          <div class="popup__msg">
            {{message}}
          </div>

          <button class="page-btn page-btn--change"
                  @click="toggleChain"
                  v-show="isNetworkBtnVisible">Change network</button>
          <button class="page-btn" type="button" @click="closeWindow">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "ErrorModal",
  props: {
    title: {
      type: String,
      required: false,
      default: () => 'Oops..'
    },
    message: {
      type: String,
      required: true,
    },
    isNetworkBtnVisible: {
      default: false,
    }
  },
  computed: {
    ...mapGetters({
      getWalletName: 'wallet/getWalletName'
    })
  },
  methods: {
    ...mapActions({
      connectWallet: 'wallet/connectWallet'
    }),
    toggleChain() {
      this.connectWallet(this.getWalletName)
    },
    closeWindow() {
      this.$emit("close");
    },
  }
}
</script>
