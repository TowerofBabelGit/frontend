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

const lastBlockPrice = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.lastBlockPrice()
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const referralsMap = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.referralsMap(account)
            .call({
                from: account
            }, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const balloonBlockPrice = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.balloonBlockPrice()
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if (err) {
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
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if (err) {
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
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const blockOfNumber = id => {
    return new Promise((resolve, reject) => {
        // import('@/utils/data.json')
        //     .then(res => {
        //         setTimeout(() => {
        //             resolve(res.data[id].Result)
        //         }, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000))
        //
        //     })
        //     .catch(err => {
        //         reject(err)
        //     })
        methodsBsc.blockOfNumber(id)
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const getDefrostTime = blockNumber => {
    return new Promise((resolve, reject) => {
        methodsBsc.timeFrozenBlock(blockNumber)
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const blockInBalloon = blockNumber => {
    return new Promise((resolve, reject) => {
        methodsBsc.blockInBaloon(blockNumber)
            .call({
                from: store.getters['contract/getContractAddress']
            }, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
    })
}

const addBlock = (WEI, imageUrl) => {
    return new Promise((resolve, reject) => {
        methodsBsc.addBlock(imageUrl)
            .send({
                from: account,
                value: WEI
            }, err => {
                if (err) {
                    reject(err)
                }
                if (checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    });
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if (receipt.status === true) {
                    resolve()
                } else {
                    reject();
                }
            })
    })
}

const addBlockWithReferralSystem = (WEI, imageUrl, description, invitingAddress, webSite) => {
    return new Promise((resolve, reject) => {
        methodsBsc.addBlockWithReferralSystem(imageUrl, description, webSite, invitingAddress)
            .send({
                from: account,
                value: WEI
            }, err => {
                if (err) {
                    reject(err)
                }
                if (checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    });
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if (receipt.status === true) {
                    resolve()
                } else {
                    reject();
                }
            })
    })
}

const addBlockToBalloon = (WEI, imageUrl, description, webSite, blockNumber) => {
    return new Promise((resolve, reject) => {
        methodsBsc.addBlockToBalloon(imageUrl, description, webSite, blockNumber)
            .send({
                from: account,
                value: WEI
            }, err => {
                if (err) {
                    reject(err)
                }
                if (checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    });
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if (receipt.status === true) {
                    resolve()
                } else {
                    reject();
                }
            })
    })
}

const changeBlockInfo = (imageUrl, description, blockNumber, webSite) => {
    return new Promise((resolve, reject) => {
        methodsBsc.changeBlockInfo(imageUrl, description, webSite, blockNumber)
            .send({
                from: account
            }, err => {
                if (err) {
                    reject(err)
                }
                if (checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    });
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if (receipt.status === true) {
                    resolve()
                } else {
                    reject();
                }
            })
    })
}

const changeBalloonBlockInfo = (imageUrl, description, webSite, blockNumber) => {
    console.log(imageUrl, description, webSite, blockNumber)
    return new Promise((resolve, reject) => {
        methodsBsc.changeBalloonBlockInfo(imageUrl, description, webSite, blockNumber)
            .send({
                from: account
            }, err => {
                if (err) {
                    reject(err)
                }
                if (checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    });
                }
            })
            .once('confirmation', (confirmationNumber, receipt) => {
                if (receipt.status === true) {
                    resolve()
                } else {
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
    addBlock,
    addBlockWithReferralSystem,
    changeBlockInfo,
    addBlockToBalloon,
    balloonBlockPrice,
    getDefrostTime,
    referralsMap,
    blockInBalloon,
    changeBalloonBlockInfo
}
