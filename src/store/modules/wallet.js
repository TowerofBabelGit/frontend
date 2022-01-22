import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import contract from '@/api/contract';


export default {
    namespaced: true,
    state: {
        isMetamaskInstalled: true,
        provider: null,
        currentConnectionInfo: {
            account: null,
            balance: null,
            chainId: null,
            walletName: null
        },
        //currentNetworkDec: 56,
        //currentNetworkDec: 97, //test
        currentNetworkDec: 1666700000, //test
        //currentNetworkHex: '0x38',
        //currentNetworkHex: '0x61', // test
        currentNetworkHex: '0x6357D2E0', // test
        //rpcUrl: 'https://bsc-dataseed.binance.org/',
        //rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'// test
        rpcUrl: 'https://api.s0.b.hmny.io'// test
    },
    mutations: {
        setProvider(state, payload) {
            state.provider = payload
        },
        setIsMetamaskInstalled(state, payload) {
            state.isMetamaskInstalled = payload
        },
        setConnectedWallet(state, payload) {
            state.connectedWallet = payload;
        },
        setCurrentConnectionInfo(state, obj) {
            if (obj.account) state.currentConnectionInfo.account = obj.account
            if (obj.balance) state.currentConnectionInfo.balance = obj.balance;
            if (obj.chainId) state.currentConnectionInfo.chainId = obj.chainId;
            if (obj.walletName) {
                state.currentConnectionInfo.walletName = obj.walletName;
                localStorage.setItem('usedWalletName', obj.walletName)
            }
        },
        unsetWallet(state) {
            contract.initWeb3Methods(null);
            if (state.currentConnectionInfo.walletName === 'walletConnect') {
                state.provider.disconnect();
            }
            state.currentConnectionInfo.walletName = null;
            state.currentConnectionInfo.chainId = null;
            state.currentConnectionInfo.account = null;
            state.currentConnectionInfo.balance = null;
        }
    },
    actions: {
        async setChain({commit, rootState}, provider) {
            const chainId = await window.web3.eth.getChainId();
            if (chainId !== rootState.wallet.currentNetworkDec && chainId !== rootState.wallet.currentNetworkHex) {
                try {
                    await provider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{chainId: rootState.wallet.currentNetworkHex}],
                    });
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask.
                    if (switchError.code === 4902) {
                        try {
                            await provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                    chainId: rootState.wallet.currentNetworkHex,
                                    rpcUrls: [rootState.wallet.rpcUrl],
                                    chainName: 'HARMONY'
                                }]
                            });
                            await provider.request({
                                method: 'wallet_switchEthereumChain',
                                params: [{chainId: rootState.wallet.currentNetworkHex}],
                            });

                        } catch (addError) {
                            commit('setCurrentConnectionInfo', {
                                chainId: await window.web3.eth.getChainId()
                            })
                        }
                    } else { // handle other "switch" errors
                        commit('setCurrentConnectionInfo', {
                            chainId: await window.web3.eth.getChainId()
                        })
                    }
                }
            }
        },
        async connectWallet({commit, rootState, dispatch}, walletName) {
            window.web3 = new Web3(new Web3.providers.HttpProvider(rootState.wallet.rpcUrl));
            contract.initWeb3Methods(null);
            if (walletName === 'default') {
                return;
            }
            let provider = null;
            if (walletName === 'walletConnect') {
                provider = new WalletConnectProvider({
                    infuraId: '49a60b898c9a46e5b21cc0aaf41b4803', //todo change infura,
                    chainId: rootState.wallet.currentNetworkDec,
                    rpc: {
                        [`${rootState.wallet.currentNetworkDec}`]: rootState.wallet.rpcUrl
                    },
                    qrcodeModalOptions: {
                        mobileLinks: [
                            'metamask',
                        ]
                    }
                })
                await provider.enable();
                window.web3 = new Web3(provider);
            }
            else {
                const isMetamaskInstalled = () => {
                    const {ethereum} = window;
                    return Boolean(ethereum && ethereum.isMetaMask)
                }
                if (!isMetamaskInstalled()) {
                    commit('setIsMetamaskInstalled', false)
                    throw Error('not_installed')
                } else {
                    await window.ethereum.request({method: 'eth_requestAccounts'});
                    window.web3 = new Web3(window.ethereum)
                    provider = window.ethereum;
                    await dispatch('setChain', provider)
                }
            }
            commit('setProvider', provider)
            const accounts = await window.web3.eth.getAccounts();
            const balance = await window.web3.eth.getBalance(accounts[0]);
            const chainId = await window.web3.eth.getChainId();
            contract.initWeb3Methods(accounts[0]);
            contract.initWalletName(walletName);
            console.log('account', accounts[0]);
            console.log('balance', balance);
            console.log('chain id', chainId);

            provider.on("chainChanged", async (res) => {
                commit('setCurrentConnectionInfo', {
                    chainId: res,
                    balance: await window.web3.eth.getBalance(accounts[0])
                })
                await dispatch('setChain', provider)
            })
            provider.on('accountsChanged', async (acs) => {
                if (!acs.length) {
                    commit('unsetWallet');
                }
                commit('setCurrentConnectionInfo', {
                    account: acs[0],
                    balance: await window.web3.eth.getBalance(acs[0]),
                    chainId: await window.web3.eth.getChainId()
                })
                contract.initWeb3Methods(acs[0]);
            })
            commit('setCurrentConnectionInfo', {
                account: accounts[0],
                balance,
                chainId,
                walletName
            })
            provider.on('disconnect', () => commit('unsetWallet'))
            return {
                account: accounts[0],
                balance,
                chainId,
                walletName
            }
        }
    },
    getters: {
        getAccount: state => state.currentConnectionInfo.account,
        getBalance: (state, getters, rootState) => Number((state.currentConnectionInfo.balance / rootState.contract.multiplier).toFixed(8)),
        isWrongChainId: state => {
            return state.currentConnectionInfo.chainId &&
                state.currentConnectionInfo.chainId !== state.currentNetworkDec &&
                state.currentConnectionInfo.chainId !== state.currentNetworkHex
        },
        getIsMetamaskInstalled: state => state.isMetamaskInstalled,
        getWalletName: state => state.currentConnectionInfo.walletName
    }
}
