import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0x66A90Bf7FbD28477E686123Ed8d2839Ce3D875d7',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
