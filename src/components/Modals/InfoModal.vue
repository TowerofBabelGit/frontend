<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-info">
        <button @click="closeWindow" class="popup__close"></button>

        <div class="popup__content">

          <div class="popup__title">
            {{title }}
          </div>
          <vue-custom-scrollbar class="scroll-area"  :settings="settings">
          <div class="popup__text" v-show="isBalloon">
            <p>
              By adding your block to the tower, you have the opportunity to engrave your mark in the digital history of mankind. <br>
              But after a while, your block will no longer be so noticeable.
            </p>
            <p>
              Therefore, you can buy a flying unit, which is always at the top of the site. <br>
              After purchasing this block, you are given the opportunity to upload a picture and a link. <br>
              And this unit freezes for you for 24 hours. After this time, another user will be able to redeem it. But if there are no others, your material will stay in the balloon as long as you want.
              <br>
            </p>
            <p>
              You can also buy all 4 flying blocks and place 1 large image segmented into squares.
            </p>
          </div>

          <div class="popup__text" v-show="!isBalloon">
           <p> The Tower is a completely decentralized project, it does not allow you to upload images to the servers of its mirrors.
           </p>
            <p>
            In order to add your block you need to prepare and upload a picture to the network.<br>
            After that you will have to add a link to the image, a link to the site, the name and partners tail of the block.
            </p>
            <p>
            Everything else will do a smart contract.
            </p>
            <p>
            Here are some tips to help make your block noticeable  and beautiful:
            </p>
            <ul>
              <li>1. Use pictures exactly 640x640 px in size.</li>
              <li>2. Use reliable image hosting.</li>
              <li>3. Optimize your images before uploading.</li>
            </ul>




           <p>
            If you want your block to always be visible - buy a place in a balloon.
           </p>
          </div>
          </vue-custom-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: "InfoModal",
  props: {
    isBalloon: {
      default: false,
    },
    title: {
      default: 'Buy tower block'
    }
  },
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false,
        maxScrollbarLength: 100
      }
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
.scroll-area {
  width: 100%;
}
</style>