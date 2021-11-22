<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup popup-buy">
        <button @click="closeWindow" class="popup__close"></button>

        <div class="popup__content">

          <div class="popup__title">
            <span v-if="isCatapult">Buy tower</span>
            <span v-if="isBalloon">Buy flying</span>
            <span v-if="isUpdate">Update</span>
            block
          </div>

          <form class="popup-form" @submit.prevent="setBuyMethod">
            <div class="page-input page-input--select"
                 v-if="isBalloon"
                 :class="{error: blocksQuantityError}">
<!--              <input type="text"
                     v-model.number="blocksQuantity"
                     class="input"
                     placeholder="Block number"
              >-->
                <div class="page-input__current" @click="openDropDown = !openDropDown">

                  {{currentOption}}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14L8 10H16L12 14Z" fill="#644A24"/>
                  </svg>

                </div>
              <div class="page-input__drop" v-show="openDropDown">
                <ul>
                  <li class="page-input__item" v-for="(num, index) in blockNums" :key="index" @click="currentOption = num.order">
                    {{num.order}}
                  </li>

                </ul>
              </div>
            </div>
            <div class="page-input" :class="{error: descriptionError}">
              <input type="text"
                     v-model="description"
                     class="input"
                     placeholder="Input block description">

              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>
            <div class="page-input" :class="{error: imageUrlError}">
              <input type="text"
                     class="input"
                     v-model="imageUrl"
                     placeholder="Image url">
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>
            <div class="page-input"
                 :class="{error: refLinkError}"
                 v-if="!isBalloon && !isUpdate && showRefLink">
              <input type="text"
                     class="input"
                     v-model="refLink"
                     placeholder="Invitor address (optional)">
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>
            <div class="page-input"
                 :class="{error: webSiteError}"
                 v-if="isCatapult">
              <input type="text"
                     class="input"
                     v-model="webSite"
                     placeholder="Web site address (optional)">
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>

            <button class="page-btn" type="submit">
              <span v-if="!isUpdate">Buy the block</span>
              <span v-else>Update the block</span>
            </button>
          </form>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

import contract from "../../api/contract";
import {mapGetters} from "vuex";

export default {
  name: "BuyModal",
  props: {
    mode: {
      required: true,
      type: String
    },
    blockNumber: {
      required: false,
      type: String
    },
    blockOwner: {
      required: false,
      type: String
    },
    defrostTimes: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    descriptionError: false,
    imageUrlError: false,
    refLinkError: false,
    webSiteError: false,
    blocksQuantityError: false,
    description: null,
    imageUrl: null,
    refLink: null,
    blocksQuantity: null,
    webSite: '',
    showRefLink: false,
    openDropDown: false,
    currentOption: 'Block number',
    blockNums: [
      {
        order: 'Block number 1'
      },
      {
        order: 'Block number 2'
      },
      {
        order: 'Block number 3'
      },
      {
        order: 'Block number 4'
      },
    ],
  }),
  computed: {
    ...mapGetters({
      getAccount: 'wallet/getAccount',
      isWrongChainId: 'wallet/isWrongChainId'
    }),
    isBalloon() {
      return this.mode === 'balloon'
    },
    isUpdate() {
      return this.mode === 'update'
    },
    isCatapult() {
      return this.mode === 'catapult'
    }
  },
  methods: {
    validate() {
      this.webSiteError = false;
      this.descriptionError = false;
      this.imageUrlError = false;
      this.blocksQuantityError = false;
      if(!this.getAccount) {
        this.$emit('error', 'Connect your web3 wallet');
        return false;
      }
      if(this.isWrongChainId) {
        this.$emit('error', 'Connect to bsc test network');
        return false;
      }
      if(!this.description) {
        this.descriptionError = true;
        return false;
      }
      if(!this.imageUrl) {
        this.imageUrlError = true;
        return false;
      }
      if(this.isBalloon) {
        if(this.blocksQuantity < 1 || this.blocksQuantity > 4) {
          this.blocksQuantityError = true;
          return false;
        }
      }
      return true;
    },
    closeWindow() {
      this.$emit("close");
    },
    setBuyMethod() {
      if (this.isBalloon) {
        this.addBlockToBalloon();
      } else if (this.isUpdate) {
        this.changeBlockInfo();
      } else {
        this.addBlock();
      }
    },
    async addBlock() {
      if(!this.validate()) {
        return;
      }
      this.$emit('loading', true);
      try {
        let lastBlockPrice = await contract.lastBlockPrice();
        let priceStep = await contract.blockStepPrice();
        // eslint-disable-next-line no-undef
        let buyBlockPrice = (BigInt(lastBlockPrice) + BigInt(priceStep)).toString();
        if (this.refLink) {
          await contract.addBlockWithReferralSystem(buyBlockPrice, this.imageUrl, this.description, this.refLink, this.webSite);
        } else {
          await contract.addBlock(buyBlockPrice, this.imageUrl, this.description, this.webSite);
        }
        this.$emit('loading', false);
        this.$emit('isThrowing', true);
        setTimeout(() => {
          this.$emit('success');
        }, 4000);
        setTimeout(() => {
          this.$emit('isThrowing', false);
          this.closeWindow();
        }, 8000)
      } catch (e) {
        console.log(e);
        this.$emit('loading', false);
      }
    },
    async addBlockToBalloon() {
      this.$emit('loading', true);
      if (this.blocksQuantity < 1 || this.blocksQuantity > 4) {
        alert('Wrong number, input from 1 to 4');
        this.$emit('loading', false);
        return;
      }
      let date = new Date(null);
      if (this.blocksQuantity === 1 && this.defrostTimes[0] !== 0) {
        date.setSeconds(this.defrostTimes[0]);
        let result = date.toISOString().substr(11, 8);
        alert(`This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      } else if (this.blocksQuantity === 2 && this.defrostTimes[1] !== 0) {
        date.setSeconds(this.defrostTimes[1]);
        let result = date.toISOString().substr(11, 8);
        alert(`This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      } else if (this.blocksQuantity === 3 && this.defrostTimes[2] !== 0) {
        date.setSeconds(this.defrostTimes[2]);
        let result = date.toISOString().substr(11, 8);
        alert(`This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      } else if (this.blocksQuantity === 4 && this.defrostTimes[3] !== 0) {
        date.setSeconds(this.defrostTimes[3]);
        let result = date.toISOString().substr(11, 8);
        alert(`This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      }
      let blockPrice = await contract.balloonBlockPrice();
      try {
        await contract.addBlockToBalloon(blockPrice, this.imageUrl, this.description, this.blocksQuantity);
        this.$emit('success');
        this.closeWindow();
      } catch (e) {
        console.log(e);
      } finally {
        this.$emit('loading', false);
      }
    },
    async changeBlockInfo() {
      this.$emit('loading', true);
      if (this.getAccount !== this.blockOwner) {
        alert('You are not the owner of this block');
        this.$emit('loading', false);
        return;
      }
      try {
        await contract.changeBlockInfo(this.imageUrl, this.description, this.blockNumber);
        this.$emit('success');
      } catch (e) {
        console.log(e)
      } finally {
        this.$emit('loading', false);
        this.closeWindow();
      }
    },
    referralsMap() {
      contract.referralsMap()
        .then(res => {
          if(res === '0x0000000000000000000000000000000000000000') {
            this.showRefLink = true;
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  mounted() {
    this.referralsMap();
  }
}
</script>
