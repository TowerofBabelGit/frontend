<template>
  <header class="header">
    <div class="header__img">
      <img src="@/assets/img/sun.png" alt="">
      <svg  class="header__img-text" viewBox="0 0 70 70" width="90%">
        <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" fill="none" id="tophalf"/>
        <text>
          <textPath xlink:href="#tophalf" startOffset="30%">Lorem ipsum</textPath>
          <textPath xlink:href="#tophalf" startOffset="87%">Dolor sit</textPath>
        </text>
<!--        <defs>
        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
        </path>
        </defs>
        <text dy="70" textLength="1220">
          &lt;!&ndash; textLength (essentially the circumference of the circle) is used as an alternative to letter-spacing for Firefox, which currently doesn't support letter-spacing for SVG &ndash;&gt;
          <textPath xlink:href="#textcircle">Lorem ipsum Dolor sit</textPath>
        </text>-->
      </svg>
    </div>

    <div class="header-wrap">
     <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="#">About tower</a>
        </li>
        <li class="header-nav__item">
          <a href="#">Smart contract</a>
        </li>
      </ul>
    </nav>

     <div class="header__logo">
      <img src="@/assets/img/logo.png" alt="">
    </div>

      <nav class="header-nav header-nav--right">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="#">Highlight blocks</a>
        </li>
        <li class="header-nav__item">
          <a href="#">Chat</a>
        </li>
      </ul>
    </nav>


    </div>

    <button class="page-btn" type="button" @click="isOpenConnect = true" v-if="!getAccount">
      Connect wallet
    </button>

    <button class="burger-btn" type="button" :class="{active: isOpenMenu}" @click="isOpenMenu = !isOpenMenu"></button>

    <nav class="mobile-nav" v-show="isOpenMenu">
      <ul class="mobile-nav__list">
        <li class="mobile-nav__item">
          <a href="#">About tower</a>
        </li>
        <li class="mobile-nav__item">
          <a href="#">Smart contract</a>
        </li>
        <li class="mobile-nav__item">
          <a href="#">Highlight blocks</a>
        </li>
        <li class="mobile-nav__item">
          <a href="#">Chat</a>
        </li>
      </ul>

      <button class="page-btn" type="button" @click="isOpenConnect = true">
        Connect wallet
      </button>
    </nav>
    <transition name="slide-fade" mode="out-in">
    <ConnectWallet v-if="isOpenConnect" @close="isOpenConnect = false"/>
    </transition>

  </header>
</template>

<script>
import ConnectWallet from "./Modals/ConnectWallet";
import {mapGetters} from "vuex";

export default {
  name: "AppHeader",
  components:{
    ConnectWallet
  },
  data: () => ({
    isOpenMenu: false,
    isOpenConnect: false
  }),
  computed: {
    ...mapGetters({
      getAccount: 'wallet/getAccount'
    })
  }
}
</script>

<style scoped>

</style>
