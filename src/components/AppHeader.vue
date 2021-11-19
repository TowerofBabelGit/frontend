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
          <a @click="isAboutModalVisible = true">About tower</a>
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
          <a href="https://t.me/putyourblockontop" target="_blank">Chat</a>
        </li>
      </ul>
    </nav>


    </div>

    <button class="page-btn page-btn--header" type="button" @click="isOpenConnect = true" v-if="!getAccount">
      Connect wallet
    </button>

    <button class="burger-btn" type="button" :class="{active: isOpenMenu}" @click="isOpenMenu = !isOpenMenu"></button>

    <nav class="mobile-nav" v-show="isOpenMenu">
      <ul class="mobile-nav__list">
        <li class="mobile-nav__item">
          <a @click="isAboutModalVisible = true">About tower</a>
        </li>
        <li class="mobile-nav__item">
          <a href="#">Smart contract</a>
        </li>
        <li class="mobile-nav__item">
          <a href="#">Highlight blocks</a>
        </li>
        <li class="mobile-nav__item">
          <a href="https://t.me/putyourblockontop" target="_blank">Chat</a>
        </li>
      </ul>

      <button class="page-btn" type="button" @click="isOpenConnect = true" v-if="!getAccount">
        Connect wallet
      </button>

      <button class="select__btn" type="button" @click="isShowAccInfo = true" v-if="getAccount">
        <div class="account-info__coin">
          <img src="@/assets/img/bnb.png" alt="">
        </div>

        <div class="account-info__info">
          <span>0.00685632 BNB</span>
          <span class="account-info__address">0xF74c...1cB6</span>
        </div>

      </button>

      <div class="mobile-nav__account" v-show="isShowAccInfo">
        <div class="account-info__title">
          Your address
        </div>

        <div class="account-info__input">
          <input type="text" readonly placeholder="0xF74casdaw22333eff1cB6eff1cB6">
          <button class="copy-btn">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83333 4.00001V1.50001C3.83333 1.27899 3.92113 1.06703 4.07741 0.910749C4.23369 0.754469 4.44565 0.666672 4.66667 0.666672H14.6667C14.8877 0.666672 15.0996 0.754469 15.2559 0.910749C15.4122 1.06703 15.5 1.27899 15.5 1.50001V13.1667C15.5 13.3877 15.4122 13.5996 15.2559 13.7559C15.0996 13.9122 14.8877 14 14.6667 14H12.1667V16.5C12.1667 16.96 11.7917 17.3333 11.3275 17.3333H1.33917C1.22927 17.334 1.12033 17.3129 1.0186 17.2714C0.916873 17.2298 0.824361 17.1685 0.746382 17.0911C0.668403 17.0136 0.606494 16.9216 0.564212 16.8201C0.52193 16.7187 0.500108 16.6099 0.5 16.5L0.5025 4.83334C0.5025 4.37334 0.8775 4.00001 1.34167 4.00001H3.83333ZM2.16917 5.66667L2.16667 15.6667H10.5V5.66667H2.16917ZM5.5 4.00001H12.1667V12.3333H13.8333V2.33334H5.5V4.00001Z" fill="url(#paint0_linear_398_13)"/>
              <defs>
                <linearGradient id="paint0_linear_398_13" x1="14.1634" y1="0.666673" x2="-2.36998" y2="5.8828" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D04F56"/>
                  <stop offset="1" stop-color="#AB3034"/>
                </linearGradient>
              </defs>
            </svg>

          </button>
        </div>

        <div class="account-info__title">
          BNB Balance
        </div>

        <div class="account-info__text">
          0.00685632 BNB
        </div>

        <button class="view-on" type="button">
          View on BscScan
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_405_4009)">
              <path d="M5.83333 1.75V2.91667H2.91667V11.0833H11.0833V8.16667H12.25V11.6667C12.25 11.8214 12.1885 11.9698 12.0791 12.0791C11.9698 12.1885 11.8214 12.25 11.6667 12.25H2.33333C2.17862 12.25 2.03025 12.1885 1.92085 12.0791C1.81146 11.9698 1.75 11.8214 1.75 11.6667V2.33333C1.75 2.17862 1.81146 2.03025 1.92085 1.92085C2.03025 1.81146 2.17862 1.75 2.33333 1.75H5.83333ZM10.3291 4.49575L7 7.82483L6.17517 7L9.50425 3.67092L7.58333 1.75H12.25V6.41667L10.3291 4.49575Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_405_4009">
                <rect width="14" height="14" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </button>

        <button class="page-btn page-btn--border">Disconnect Wallet</button>
      </div>

    </nav>

    <div class="account-info select" v-if="getAccount">
      <button type="button" class="select__btn" @click="isOpenSelect = !isOpenSelect">
        <div class="account-info__coin">
          <img src="@/assets/img/bnb.png" alt="">
        </div>

        <div class="account-info__info">
          <span>0.00685632 BNB</span>
          <span class="account-info__address">0xF74c...1cB6</span>
        </div>

        <div class="select__icon" :class="{opened: isOpenSelect}">
          </div>
      </button>

      <div class="select__drop" v-show="isOpenSelect">
        <div class="account-info__title">
          Your address
        </div>

        <div class="account-info__input">
          <input type="text" readonly placeholder="0xF74casdaw22333eff1cB6eff1cB6">
          <button class="copy-btn">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83333 4.00001V1.50001C3.83333 1.27899 3.92113 1.06703 4.07741 0.910749C4.23369 0.754469 4.44565 0.666672 4.66667 0.666672H14.6667C14.8877 0.666672 15.0996 0.754469 15.2559 0.910749C15.4122 1.06703 15.5 1.27899 15.5 1.50001V13.1667C15.5 13.3877 15.4122 13.5996 15.2559 13.7559C15.0996 13.9122 14.8877 14 14.6667 14H12.1667V16.5C12.1667 16.96 11.7917 17.3333 11.3275 17.3333H1.33917C1.22927 17.334 1.12033 17.3129 1.0186 17.2714C0.916873 17.2298 0.824361 17.1685 0.746382 17.0911C0.668403 17.0136 0.606494 16.9216 0.564212 16.8201C0.52193 16.7187 0.500108 16.6099 0.5 16.5L0.5025 4.83334C0.5025 4.37334 0.8775 4.00001 1.34167 4.00001H3.83333ZM2.16917 5.66667L2.16667 15.6667H10.5V5.66667H2.16917ZM5.5 4.00001H12.1667V12.3333H13.8333V2.33334H5.5V4.00001Z" fill="url(#paint0_linear_398_13)"/>
              <defs>
                <linearGradient id="paint0_linear_398_13" x1="14.1634" y1="0.666673" x2="-2.36998" y2="5.8828" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D04F56"/>
                  <stop offset="1" stop-color="#AB3034"/>
                </linearGradient>
              </defs>
            </svg>

          </button>
        </div>

        <div class="account-info__title">
          BNB Balance
        </div>

        <div class="account-info__text">
          0.00685632 BNB
        </div>

        <button class="view-on" type="button">
          View on BscScan
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_405_4009)">
              <path d="M5.83333 1.75V2.91667H2.91667V11.0833H11.0833V8.16667H12.25V11.6667C12.25 11.8214 12.1885 11.9698 12.0791 12.0791C11.9698 12.1885 11.8214 12.25 11.6667 12.25H2.33333C2.17862 12.25 2.03025 12.1885 1.92085 12.0791C1.81146 11.9698 1.75 11.8214 1.75 11.6667V2.33333C1.75 2.17862 1.81146 2.03025 1.92085 1.92085C2.03025 1.81146 2.17862 1.75 2.33333 1.75H5.83333ZM10.3291 4.49575L7 7.82483L6.17517 7L9.50425 3.67092L7.58333 1.75H12.25V6.41667L10.3291 4.49575Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_405_4009">
                <rect width="14" height="14" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </button>

        <button class="page-btn page-btn--border">Disconnect Wallet</button>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
    <ConnectWallet v-if="isOpenConnect" @close="isOpenConnect = false"/>
    </transition>
    <transition name="slide-fade" mode="out-in">
    <AboutModal v-if="isAboutModalVisible" @close="isAboutModalVisible = false"></AboutModal>
    </transition>
  </header>
</template>

<script>
import ConnectWallet from "./Modals/ConnectWallet";
import AboutModal from "./Modals/AboutModal";
import {mapGetters} from "vuex";

export default {
  name: "AppHeader",
  components:{
    ConnectWallet,
    AboutModal,

  },
  data: () => ({
    isOpenMenu: false,
    isOpenConnect: false,
    isOpenSelect: false,
    isAboutModalVisible: false,
    isShowAccInfo: false
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
