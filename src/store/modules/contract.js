import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        //contractAddress: '0x7DeeBC4FF5b7593cDa15af1B78fB63aA33bd5897',
        contractAddress: '0xC2B7A02082BB1C8C523fE6ed0560b15eF99A1798',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
