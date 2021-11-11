import abi from "@/utils/abi";
import store from '@/store'
let methodsBsc = null;
let account = null;
let walletName = null;

const initWeb3Methods = payload => {
    methodsBsc = new window.web3.eth.Contract(abi, store.getters['contract/getContractAddress']).methods;
    account = payload;
}

const initWalletName = payload => {
    walletName = payload;
}

const checkIsWalletConnect = () => {
    return walletName === 'walletConnect'
}

// const formatPrice = (price) => {
//     let coefficient = store.getters['contract/getMultiplier'];
//     return Math.round(price * coefficient)
//         .toLocaleString('fullwide', {useGrouping: false});
// }

const lastBlockPrice = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.lastBlockPrice()
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const blockStepPrice = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.blockStepPrice()
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const lastBlockNumber = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.lastBlockNumber()
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const blockOfNumber = id => {
    return new Promise((resolve, reject) => {
        methodsBsc.blockOfNumber(id)
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const addBlock = (WEI, imageUrl, description) => {
    return new Promise((resolve, reject) => {
        methodsBsc.addBlock(imageUrl, description)
            .send({
                from: account,
                value: WEI
            }, err => {
                if(err) {
                    reject(err)
                }
                if(checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    });
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if(receipt.status === true) {
                    resolve()
                }
                else {
                    reject();
                }
            })
    })
}

export default {
    initWeb3Methods,
    initWalletName,
    lastBlockPrice,
    lastBlockNumber,
    blockStepPrice,
    blockOfNumber,
    addBlock
}
