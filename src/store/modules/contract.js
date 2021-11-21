import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0x33ab027319A11dab41838dCB520E14cE9f536870',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
