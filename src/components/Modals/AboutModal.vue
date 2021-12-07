<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-about">
        <div class="popup__content">

          <div class="popup__title">
            About
            the project
          </div>


            <vue-custom-scrollbar class="scroll-area"  :settings="settings">
              <div class="popup__text">
              <p>  The Tower of Babel is a proof of how powerful the human race is if it is united by one goal and speaks in one language!
              </p>
               <p> The original myth tells us that before all people spoke the same language and decided to build a tower through which one could reach God.
               </p>
               <p> But God was angry, destroyed the tower and made the world have many languages   and people lost the opportunity to join forces to achieve such bold goals. Here is the full version of the legend -
                 <a href="https://www.britannica.com/topic/Tower-of-Babel" target="_blank">
                   https://www.britannica.com/topic/Tower-of-Babel.</a>
               </p>
                  <p>
                On the threshold of the 21st century, all people again speak one language - the language of smart contracts.
                The Tower of Babel project marks the beginning of a new structure that no one is able to demolish.
                </p>
                <ul>
                  <li>- There is no back-end in the project</li>
                  <li>- All interaction takes place only through a smart contract</li>
                  <li> - All code is open and anyone can deploy a project mirror</li>
                </ul>

                <p>
                This is a creation that by definition cannot be destroyed as long as there is at least 1 copy of it online.
                That is why we are confident that the tower will be built as long as humanity uses information technologies. From today and forever.
                </p>
                <p>
                The tower is built by people.
                In order to make your contribution, you need to add your block to the tower.
                </p>
                <p>
                The tower has the form of a binary tree and in its widest part has 16 blocks.
                </p>
                <ul>
              <li>  1</li>
              <li>  2</li>
              <li>  4</li>
              <li>  8</li>
              <li> 16</li>
              <li> 16</li>
              <li> 16</li>
              <li> 16</li>
              <li> 16</li>
              <li> etc.</li>
                </ul>
                <p>
                Each subsequent block is more expensive than the previous one by a fixed step - d. <br>
                Each subsequent block falls to the top of the tower and gradually descends with each new contribution.<br>
                The cost of each block is divided between the 6 blocks on which it is based.<br>
                The two blocks on which he directly relies receive 25% of the value of the block.<br>
                And the 4 blocks that support the top two receive 12.5%   of the block cost.<br>
                </p>

                <img src="@/assets/img/scheme.png" alt="">

              <p>  Thus, by purchasing a block in the tower, for the next 6 blocks you will get back the cost of the block + an additional bonus, which is provided by the fact that each subsequent block is more expensive.
              </p>
                <p>
                The bonus amount is calculated by a simple formula:
                </p>
                <p>
                d x 0.25 + 2d x 0.25 + 3d x 0.125 + 4d x 0.125 + 5d x 0.125 + 6d x 0.125
                </p>
                <p>
                By purchasing a block, you can download (as well as edit) your advertising material: a picture and a link. Both are stored in the smart contract, so there is no ANY moderation.
                </p>
                <p>
                All blocks and sequences are also recorded in the smart contract and are available for viewing by any user. Blocks remain in the tower forever, so this is the best way to leave YOUR mark in the digital history of mankind.
                </p>

              </div>
          </vue-custom-scrollbar>

          <button class="page-btn" @click="closeWindow" type="button" v-focus @keyup.esc="closeWindow" @keyup.enter="closeWindow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6M11 11L6 6M6 6L11 1L1 11" stroke="white" stroke-width="2"/>
            </svg>

            Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: "AboutModal",
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

<style scoped lang="scss">



</style>
