<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'App',
    methods: {
      ...mapActions({
        connectWallet: 'wallet/connectWallet'
      }),
      tryConnect() {
        let wallet = localStorage.getItem('usedWalletName');
        if(wallet) {
          this.connectWallet(wallet)
        }
      }
    },
    mounted() {
      this.tryConnect();
    }
  }
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
