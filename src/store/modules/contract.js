import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0x72041F735E18594A19059167e3D80697e86a6F8F',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
