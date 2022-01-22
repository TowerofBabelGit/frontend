<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  // import Web3 from "web3";
  // import req from '@/api/contract'

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
        } else {
          this.connectWallet('default')
        }
      }
    },
    mounted() {
      this.tryConnect();


      // const bscContractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"}],"name":"addBlock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"addBlockToBalloon","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"address","name":"_invitingAddress","type":"address"}],"name":"addBlockWithReferralSystem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"balloonBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blockInBaloon","outputs":[{"internalType":"uint256","name":"blockPrice","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"imageUrl","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"webSite","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blockOfNumber","outputs":[{"internalType":"uint256","name":"blockPrice","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"imageUrl","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"webSite","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockStepPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"blocksOfAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"changeBalloonBlockInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"changeBlockInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositToContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"distribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"getDefrostTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"totalCount","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"getQuantityByTotalAndPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"lastBlockNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralsMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setBalloonBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setBlockStepPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setLastBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setReferralBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setSystemBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"systemBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"timeFrozenBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_qauntity","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
      // const harmonyContractABi = [
      //   {
      //     "inputs": [],
      //     "stateMutability": "nonpayable",
      //     "type": "constructor"
      //   },
      //   {
      //     "name": "allBlocks",
      //     "stateMutability": "view",
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "type": "uint256",
      //         "name": "",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "outputs": [
      //       {
      //         "internalType": "uint256",
      //         "name": "created",
      //         "type": "uint256"
      //       },
      //       {
      //         "type": "uint256",
      //         "internalType": "uint256",
      //         "name": "blockPrice"
      //       },
      //       {
      //         "name": "number",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       },
      //       {
      //         "name": "owner",
      //         "type": "address",
      //         "internalType": "address"
      //       },
      //       {
      //         "internalType": "string",
      //         "name": "imageUrl",
      //         "type": "string"
      //       },
      //       {
      //         "internalType": "string",
      //         "name": "description",
      //         "type": "string"
      //       },
      //       {
      //         "name": "webSite",
      //         "internalType": "string",
      //         "type": "string"
      //       },
      //       {
      //         "name": "chain",
      //         "type": "string",
      //         "internalType": "string"
      //       }
      //     ]
      //   },
      //   {
      //     "stateMutability": "view",
      //     "inputs": [],
      //     "type": "function",
      //     "name": "balloonBlockPrice",
      //     "outputs": [
      //       {
      //         "type": "uint256",
      //         "internalType": "uint256",
      //         "name": ""
      //       }
      //     ]
      //   },
      //   {
      //     "inputs": [
      //       {
      //         "name": "",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       }
      //     ],
      //     "type": "function",
      //     "outputs": [
      //       {
      //         "internalType": "uint256",
      //         "name": "created",
      //         "type": "uint256"
      //       },
      //       {
      //         "name": "blockPrice",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       },
      //       {
      //         "name": "number",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       },
      //       {
      //         "internalType": "address",
      //         "type": "address",
      //         "name": "owner"
      //       },
      //       {
      //         "name": "imageUrl",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "type": "string",
      //         "name": "description",
      //         "internalType": "string"
      //       },
      //       {
      //         "name": "webSite",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "name": "chain",
      //         "type": "string",
      //         "internalType": "string"
      //       }
      //     ],
      //     "name": "blockInBaloon",
      //     "stateMutability": "view"
      //   },
      //   {
      //     "name": "blockOfNumber",
      //     "inputs": [
      //       {
      //         "internalType": "uint256",
      //         "name": "",
      //         "type": "uint256"
      //       }
      //     ],
      //     "type": "function",
      //     "stateMutability": "view",
      //     "outputs": [
      //       {
      //         "name": "created",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       },
      //       {
      //         "name": "blockPrice",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       },
      //       {
      //         "name": "number",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       },
      //       {
      //         "internalType": "address",
      //         "type": "address",
      //         "name": "owner"
      //       },
      //       {
      //         "name": "imageUrl",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "name": "description",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "internalType": "string",
      //         "name": "webSite",
      //         "type": "string"
      //       },
      //       {
      //         "name": "chain",
      //         "type": "string",
      //         "internalType": "string"
      //       }
      //     ]
      //   },
      //   {
      //     "name": "blockStepPrice",
      //     "inputs": [],
      //     "type": "function",
      //     "outputs": [
      //       {
      //         "internalType": "uint256",
      //         "name": "",
      //         "type": "uint256"
      //       }
      //     ],
      //     "stateMutability": "view"
      //   },
      //   {
      //     "outputs": [
      //       {
      //         "internalType": "uint256",
      //         "type": "uint256",
      //         "name": ""
      //       }
      //     ],
      //     "name": "blocksOfAddress",
      //     "type": "function",
      //     "stateMutability": "view",
      //     "inputs": [
      //       {
      //         "internalType": "address",
      //         "type": "address",
      //         "name": ""
      //       },
      //       {
      //         "internalType": "uint256",
      //         "type": "uint256",
      //         "name": ""
      //       }
      //     ]
      //   },
      //   {
      //     "stateMutability": "view",
      //     "name": "lastBlockNumber",
      //     "type": "function",
      //     "inputs": [],
      //     "outputs": [
      //       {
      //         "name": "",
      //         "internalType": "uint8",
      //         "type": "uint8"
      //       }
      //     ]
      //   },
      //   {
      //     "inputs": [],
      //     "name": "lastBlockPrice",
      //     "outputs": [
      //       {
      //         "name": "",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "stateMutability": "view",
      //     "type": "function"
      //   },
      //   {
      //     "outputs": [
      //       {
      //         "name": "",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "type": "function",
      //     "stateMutability": "view",
      //     "inputs": [],
      //     "name": "referralBlockPrice"
      //   },
      //   {
      //     "outputs": [
      //       {
      //         "internalType": "address",
      //         "type": "address",
      //         "name": ""
      //       }
      //     ],
      //     "stateMutability": "view",
      //     "inputs": [
      //       {
      //         "type": "address",
      //         "name": "",
      //         "internalType": "address"
      //       }
      //     ],
      //     "name": "referralsMap",
      //     "type": "function"
      //   },
      //   {
      //     "type": "function",
      //     "stateMutability": "view",
      //     "name": "systemBlockPrice",
      //     "inputs": [],
      //     "outputs": [
      //       {
      //         "internalType": "uint256",
      //         "type": "uint256",
      //         "name": ""
      //       }
      //     ]
      //   },
      //   {
      //     "stateMutability": "view",
      //     "inputs": [
      //       {
      //         "type": "uint256",
      //         "name": "",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "name": "timeFrozenBlock",
      //     "outputs": [
      //       {
      //         "type": "uint256",
      //         "name": "",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "type": "function"
      //   },
      //   {
      //     "inputs": [
      //       {
      //         "name": "_imageUrl",
      //         "internalType": "string",
      //         "type": "string"
      //       },
      //       {
      //         "name": "_description",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "type": "string",
      //         "name": "_webSite",
      //         "internalType": "string"
      //       }
      //     ],
      //     "stateMutability": "payable",
      //     "outputs": [],
      //     "name": "addBlock",
      //     "type": "function"
      //   },
      //   {
      //     "type": "function",
      //     "name": "addBlockWithReferralSystem",
      //     "inputs": [
      //       {
      //         "type": "string",
      //         "name": "_imageUrl",
      //         "internalType": "string"
      //       },
      //       {
      //         "internalType": "string",
      //         "name": "_description",
      //         "type": "string"
      //       },
      //       {
      //         "name": "_webSite",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "type": "address",
      //         "name": "_invitingAddress",
      //         "internalType": "address"
      //       }
      //     ],
      //     "outputs": [],
      //     "stateMutability": "payable"
      //   },
      //   {
      //     "name": "addBlockToBalloon",
      //     "outputs": [],
      //     "stateMutability": "payable",
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "type": "string",
      //         "name": "_imageUrl",
      //         "internalType": "string"
      //       },
      //       {
      //         "name": "_description",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "name": "_webSite",
      //         "type": "string",
      //         "internalType": "string"
      //       },
      //       {
      //         "name": "_blockNumber",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       }
      //     ]
      //   },
      //   {
      //     "inputs": [],
      //     "name": "distribute",
      //     "stateMutability": "payable",
      //     "outputs": [],
      //     "type": "function"
      //   },
      //   {
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "internalType": "string",
      //         "type": "string",
      //         "name": "_imageUrl"
      //       },
      //       {
      //         "type": "string",
      //         "internalType": "string",
      //         "name": "_description"
      //       },
      //       {
      //         "type": "string",
      //         "name": "_webSite",
      //         "internalType": "string"
      //       },
      //       {
      //         "type": "uint256",
      //         "name": "_blockNumber",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "name": "changeBlockInfo",
      //     "stateMutability": "nonpayable",
      //     "outputs": []
      //   },
      //   {
      //     "stateMutability": "nonpayable",
      //     "outputs": [],
      //     "name": "changeBalloonBlockInfo",
      //     "inputs": [
      //       {
      //         "name": "_imageUrl",
      //         "internalType": "string",
      //         "type": "string"
      //       },
      //       {
      //         "internalType": "string",
      //         "type": "string",
      //         "name": "_description"
      //       },
      //       {
      //         "internalType": "string",
      //         "name": "_webSite",
      //         "type": "string"
      //       },
      //       {
      //         "name": "_blockNumber",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "type": "function"
      //   },
      //   {
      //     "type": "function",
      //     "outputs": [
      //       {
      //         "name": "",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       }
      //     ],
      //     "stateMutability": "pure",
      //     "name": "getQuantityByTotalAndPercent",
      //     "inputs": [
      //       {
      //         "internalType": "uint256",
      //         "type": "uint256",
      //         "name": "totalCount"
      //       },
      //       {
      //         "name": "percent",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       }
      //     ]
      //   },
      //   {
      //     "outputs": [
      //       {
      //         "type": "uint256",
      //         "name": "",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "name": "getDefrostTime",
      //     "stateMutability": "view",
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "type": "uint256",
      //         "name": "_blockNumber",
      //         "internalType": "uint256"
      //       }
      //     ]
      //   },
      //   {
      //     "inputs": [],
      //     "outputs": [
      //       {
      //         "internalType": "uint256",
      //         "name": "",
      //         "type": "uint256"
      //       }
      //     ],
      //     "name": "totalSupply",
      //     "type": "function",
      //     "stateMutability": "view"
      //   },
      //   {
      //     "inputs": [
      //       {
      //         "type": "address",
      //         "name": "newOwner",
      //         "internalType": "address"
      //       }
      //     ],
      //     "stateMutability": "nonpayable",
      //     "name": "transferOwnership",
      //     "type": "function",
      //     "outputs": []
      //   },
      //   {
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "type": "uint256",
      //         "name": "_qauntity",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "stateMutability": "nonpayable",
      //     "outputs": [],
      //     "name": "withdraw"
      //   },
      //   {
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "internalType": "address",
      //         "type": "address",
      //         "name": "owner"
      //       }
      //     ],
      //     "name": "tokensOfOwner",
      //     "outputs": [
      //       {
      //         "type": "uint256[]",
      //         "name": "",
      //         "internalType": "uint256[]"
      //       }
      //     ],
      //     "stateMutability": "view"
      //   },
      //   {
      //     "name": "depositContract",
      //     "inputs": [],
      //     "stateMutability": "payable",
      //     "type": "function",
      //     "outputs": []
      //   },
      //   {
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "name": "_price",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "name": "setBlockStepPrice",
      //     "stateMutability": "nonpayable",
      //     "outputs": []
      //   },
      //   {
      //     "name": "setSystemBlockPrice",
      //     "outputs": [],
      //     "type": "function",
      //     "stateMutability": "nonpayable",
      //     "inputs": [
      //       {
      //         "name": "_price",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       }
      //     ]
      //   },
      //   {
      //     "type": "function",
      //     "stateMutability": "nonpayable",
      //     "name": "setLastBlockPrice",
      //     "outputs": [],
      //     "inputs": [
      //       {
      //         "name": "_price",
      //         "internalType": "uint256",
      //         "type": "uint256"
      //       }
      //     ]
      //   },
      //   {
      //     "outputs": [],
      //     "type": "function",
      //     "stateMutability": "nonpayable",
      //     "name": "setBalloonBlockPrice",
      //     "inputs": [
      //       {
      //         "type": "uint256",
      //         "name": "_price",
      //         "internalType": "uint256"
      //       }
      //     ]
      //   },
      //   {
      //     "name": "setReferralBlockPrice",
      //     "stateMutability": "nonpayable",
      //     "type": "function",
      //     "inputs": [
      //       {
      //         "name": "_price",
      //         "type": "uint256",
      //         "internalType": "uint256"
      //       }
      //     ],
      //     "outputs": []
      //   }
      // ]
      //
      // const contract = {
      //   harmonyRpcUrl: 'https://api.s0.b.hmny.io',
      //   bscRpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      //   bscAddress: '0x27175F599134147ee93322959c9788200e5b7C0F',
      //   harmonyAddress: '0x7DeeBC4FF5b7593cDa15af1B78fB63aA33bd5897'
      // }
      //
      // const web3Bsc = new Web3(new Web3.providers.HttpProvider(contract.bscRpcUrl));
      // const web3Harmony = new Web3(new Web3.providers.HttpProvider(contract.harmonyRpcUrl));
      //
      // const bscMethods = new web3Bsc.eth.Contract(bscContractABI, contract.bscAddress).methods;
      // const harmonyMethods = new web3Harmony.eth.Contract(harmonyContractABi, contract.harmonyAddress).methods;
      //
      // const lastBlockNumber = () => {
      //   return new Promise((resolve, reject) => {
      //     bscMethods.lastBlockNumber()
      //         .call({
      //           from: contract.bscAddress
      //         }, (err, res) => {
      //           if (err) {
      //             reject(err)
      //           }
      //           resolve(res)
      //         })
      //   })
      // }
      //
      // const lastBlockPrice = () => {
      //   return new Promise((resolve, reject) => {
      //     harmonyMethods.lastBlockPrice()
      //         .call({
      //           from: contract.harmonyAddress
      //         }, (err, res) => {
      //           if (err) {
      //             reject(err)
      //           }
      //           resolve(res)
      //         })
      //   })
      // }
      //
      // const blockOfNumber = id => {
      //   return new Promise((resolve, reject) => {
      //     bscMethods.blockOfNumber(id)
      //         .call({
      //           from: contract.bscAddress
      //         }, (err, res) => {
      //           if (err) {
      //             reject(err)
      //           }
      //           resolve(res)
      //         })
      //   })
      // }
      //
      // const blockStepPrice = () => {
      //   return new Promise((resolve, reject) => {
      //     harmonyMethods.blockStepPrice()
      //         .call({
      //           from: contract.harmonyAddress
      //         }, (err, res) => {
      //           if (err) {
      //             reject(err)
      //           }
      //           resolve(res)
      //         })
      //   })
      // }
      //
      //
      //
      // const main = async () => {
      //   const blocksQt = await lastBlockNumber();
      //   try {
      //     for(let i = 0; i < blocksQt; i++) {
      //       if(i === 0) {
      //         continue;
      //       }
      //       const block = await blockOfNumber(i);
      //       console.log('Iteration number ', i);
      //       console.log('Current block ', block);
      //       let lastPrice = await lastBlockPrice();
      //       let priceStep = await blockStepPrice();
      //
      //       // eslint-disable-next-line no-undef
      //       let buyBlockPrice = (BigInt(lastPrice) + BigInt(priceStep)).toString();
      //       const result = await req.addBlock(buyBlockPrice, block.imageUrl, block.description, block.webSite);
      //       console.log('Transfer result - ', result);
      //     }
      //   } catch (e) {
      //     console.log('Transfer exception', e);
      //   }
      // }
      //
      // main();
    }
  }
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
