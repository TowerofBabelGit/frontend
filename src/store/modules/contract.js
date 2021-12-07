import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0x27175F599134147ee93322959c9788200e5b7C0F',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
