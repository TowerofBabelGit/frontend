import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0xB59e30a8cC0AAA67111fB837420058DA7E37f243',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
