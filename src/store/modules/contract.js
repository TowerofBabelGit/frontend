import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0x72A8E3949aE18a46c6BCE27dCfd35C83768204Cd',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
