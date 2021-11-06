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

const formatPrice = (price) => {
    let coefficient = store.getters['contract/getMultiplier'];
    return Math.round(price * coefficient)
        .toLocaleString('fullwide', {useGrouping: false});
}

const getMinBidFromAuction = tokenId => {
    return new Promise((resolve, reject) => {
        methodsBsc.getMinBidFromAuction(tokenId)
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

const rateOfAuctionId = auctionId => {
    return new Promise((resolve, reject) => {
        methodsBsc.rateOfAuctionId(auctionId)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res.id)
            })
    })
}

const auctionOfToken = tokenId => {
    return new Promise((resolve, reject) => {
        methodsBsc.auctionOfToken(tokenId)
            .call({
                from: account
            }, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res.id)
            })
    })
}

const closeAuctionByUser = tokenId => {
    return new Promise((resolve, reject) => {
        methodsBsc.closeAuctionByUser(tokenId)
            .send({
                from: account
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

const changeCostSimpleAuction = (tokenId, newPrice, currency) => {
    return new Promise((resolve, reject) => {
        methodsBsc.changeCostSimpleAuction(tokenId, formatPrice(newPrice, currency))
            .send({
                from: account
            }, err => {
                if(err) {
                    reject(err)
                }
                if(checkIsWalletConnect()) {
                    resolve({
                        isWalletConnect: true
                    })
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

const checkPendingAuction = tokenId => {
    return new Promise((resolve, reject) => {
        methodsBsc.checkPendingAuction(tokenId)
            .send({
                from: account
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

const createRate = (tokenId, tokensAmount, currency) => {
    let bnbAmount = 0;
    let naftyAmount = 0;
    if(currency === 'NAFTY') {
        naftyAmount = formatPrice(tokensAmount, currency)
    } else {
        bnbAmount = formatPrice(tokensAmount, currency)
    }
    return new Promise((resolve, reject) => {
        methodsBsc.createRate(tokenId, naftyAmount)
            .send({
                from: account,
                value: bnbAmount
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

const createSimpleAuction = (tokenId, price, token, currency) => {
    return new Promise((resolve, reject) => {
        methodsBsc.createSimpleAuction(tokenId, formatPrice(price, currency), token)
            .send({
                from: account
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

const createTimeAuction = (tokenId, startTime, endTime, price, currency, token) => {
    return new Promise((resolve, reject) => {
        methodsBsc.createTimeAuction(tokenId, startTime, endTime, formatPrice(price, currency), token)
            .send({
                from: account
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

const createTokenAndSimpleAuction = (price, token, currency) => {
    return new Promise((resolve, reject) => {
        methodsBsc.createTokenAndSimpleAuction(formatPrice(price, currency), token)
            .send({
                from: account
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

const createTokenAndTimeAuction = (startTime, endTime, price, currency, token) => {
    return new Promise((resolve, reject) => {
        methodsBsc.createTokenAndTimeAuction(startTime, endTime, formatPrice(price, currency), token)
            .send({
                from: account
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

const createToken = () => {
    return new Promise((resolve, reject) => {
        methodsBsc.createToken()
            .send({
                from: account
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

const transferFrom = (to, tokenId) => {
    return new Promise((resolve, reject) => {
        methodsBsc.transferFrom(account, to, tokenId)
            .send({
                from: account
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
    getMinBidFromAuction,
    rateOfAuctionId,
    closeAuctionByUser,
    changeCostSimpleAuction,
    checkPendingAuction,
    createRate,
    createSimpleAuction,
    createTimeAuction,
    auctionOfToken,
    initWalletName,
    createTokenAndSimpleAuction,
    createTokenAndTimeAuction,
    createToken,
    transferFrom
}
