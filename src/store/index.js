import Vue from 'vue'
import Vuex from 'vuex'
import Wallet from './modules/wallet'
import Contract from './modules/contract'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wallet: Wallet,
    contract: Contract
  }
})
