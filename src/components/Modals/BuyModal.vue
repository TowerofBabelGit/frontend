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
            <span v-if="isUpdateBalloon">Update flying</span>
            <span v-if="isUpdate">Update</span>
            block
          </div>

          <form class="popup-form" @submit.prevent="setBuyMethod">
            <div class="page-input page-input--select"
                 v-if="isBalloon || isUpdateBalloon"
                 :class="{error: blocksQuantityError}">
                <div class="page-input__current" @click="setDropdown">

                  {{currentOption}}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14L8 10H16L12 14Z" fill="#644A24"/>
                  </svg>

                </div>
              <div class="page-input__drop" v-show="openDropDown">
                <ul>
                  <li class="page-input__item" v-for="num in blockNums" :key="num" @click="blocksQuantity = num; currentOption = num; openDropDown = false">
                    {{num}}
                  </li>

                </ul>
              </div>
            </div>
            <div class="page-input" :class="{error: descriptionError, focus: movePlaceholder}" >
              <input type="text"
                     v-model="description"
                     class="input"
                     @focus="movePlaceholder = true"

                     >
              <label>Input block title</label>
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>
            <div class="page-input" :class="{error: imageUrlError, focus: movePlaceholder1}" >
              <input type="text"
                     class="input"
                     v-model="imageUrl"
                     @focus="movePlaceholder1 = true"

              >
              <label >Image URL</label>
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>
            <div class="page-input"
                 :class="{error: refLinkError, focus: movePlaceholder2}"
                 v-if="!isBalloon && !isUpdate && showRefLink && !isUpdateBalloon">
              <input type="text"
                     class="input"
                     v-model="refLink"
                     @focus="movePlaceholder2 = true"

              >
              <label>Invitor address (optional)</label>
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>
            <div class="page-input"
                 :class="{error: webSiteError, focus: movePlaceholder3}"
                 v-if="isCatapult || isUpdate || isBalloon || isUpdateBalloon">
              <input type="text"
                     class="input"
                     v-model="webSite"
                      @focus="movePlaceholder3 = true"

                     >
              <label>Web site address (optional)</label>
              <div class="page-input__icon">
                <img src="@/assets/img/svg/icon-error.svg" alt="">
              </div>
            </div>

            <button class="page-btn" type="submit">
              <span v-if="!isUpdate && !isUpdateBalloon">Buy the block</span>
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
    balloonBlocks: {
      required: true,
      type: Array
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
    blocksQuantity: 1,
    webSite: '',
    showRefLink: false,
    openDropDown: false,
    movePlaceholder: false,
    movePlaceholder1: false,
    movePlaceholder2: false,
    movePlaceholder3: false,
    currentOption: 'Block number',
    blockNums: [],
  }),
  computed: {
    ...mapGetters({
      getAccount: 'wallet/getAccount',
      isWrongChainId: 'wallet/isWrongChainId'
    }),
    isBalloon() {
      return this.mode === 'balloon'
    },
    isUpdateBalloon() {
      return this.mode === 'updateBalloon'
    },
    isUpdate() {
      return this.mode === 'update'
    },
    isCatapult() {
      return this.mode === 'catapult'
    }
  },
  methods: {
    setDropdown() {
      if(!this.blockNums.length) {
        return;
      }
      this.openDropDown = !this.openDropDown;
    },
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
        if(!this.blockNums.length) {
          this.$emit('error', 'No available blocks for purchase');
          return false;
        }
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
      } else if (this.isUpdateBalloon) {
        this.changeBalloonBlockInfo();
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
        this.$emit('error', e.message);
        this.$emit('loading', false);
      }
    },
    async addBlockToBalloon() {
      if(!this.validate()) {
        return
      }
      this.$emit('loading', true);
      let date = new Date(null);
      if (this.blocksQuantity === 1 && this.defrostTimes[0] !== 0) {
        date.setSeconds(this.defrostTimes[0]);
        let result = date.toISOString().substr(11, 8);
        this.$emit('error', `This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      } else if (this.blocksQuantity === 2 && this.defrostTimes[1] !== 0) {
        date.setSeconds(this.defrostTimes[1]);
        let result = date.toISOString().substr(11, 8);
        this.$emit('error',`This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      } else if (this.blocksQuantity === 3 && this.defrostTimes[2] !== 0) {
        date.setSeconds(this.defrostTimes[2]);
        let result = date.toISOString().substr(11, 8);
        this.$emit('error',`This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      } else if (this.blocksQuantity === 4 && this.defrostTimes[3] !== 0) {
        date.setSeconds(this.defrostTimes[3]);
        let result = date.toISOString().substr(11, 8);
        this.$emit('error', `This unit is frozen. ${result} left before defrosting`);
        this.$emit('loading', false);
        return;
      }
      let blockPrice = await contract.balloonBlockPrice();
      try {
        await contract.addBlockToBalloon(blockPrice, this.imageUrl, this.description, this.webSite, this.blocksQuantity);
        this.$emit('loading', false);
        this.$emit('success');
        this.closeWindow();
      } catch (e) {
        this.$emit('loading', false);
        console.log(e);
        this.$emit('error', e.message)
      }
    },
    async changeBlockInfo() {
      this.$emit('loading', true);
      if (this.getAccount !== this.blockOwner) {
        this.$emit('error', 'You are not the owner of this block');
        this.$emit('loading', false);
        return;
      }
      try {
        await contract.changeBlockInfo(this.imageUrl, this.description, this.blockNumber, this.webSite);
        this.$emit('loading', false);
        this.$emit('success');
      } catch (e) {
        console.log(e)
        this.$emit('loading', false);
        this.$emit('error', e.message);
      }
    },
    async changeBalloonBlockInfo() {
      this.$emit('loading', true);
      if (this.getAccount !== this.blockOwner) {
        this.$emit('error', 'You are not the owner of this block');
        this.$emit('loading', false);
        return;
      }
      try {
        await contract.changeBalloonBlockInfo(this.imageUrl, this.description, this.webSite, this.blockNumber);
        this.$emit('loading', false);
        this.$emit('success');
      } catch (e) {
        console.log(e)
        this.$emit('loading', false);
        this.$emit('error', e.message);
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
    },
    checkAvailableBlocks() {
      this.defrostTimes.map((i, index) => {
        if(i === 0 && !this.isUpdateBalloon) {
          this.blockNums.push(index + 1);
        }
      });
      if(this.isUpdateBalloon) {
        this.balloonBlocks.map((i, index) => {
          if(i.owner === this.getAccount) {
            this.blockNums.push(index + 1)
          }
        })
      }
      if(!this.blockNums.length) {
        this.currentOption = 'No available blocks'
      }
    }
  },
  mounted() {
    this.referralsMap();
    this.checkAvailableBlocks();
  }
}
</script>
