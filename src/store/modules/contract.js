import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        contractAddress: '0xB751841B27eF085E1A92B10fe3976B4a7904E176',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getABI: state=>state.abi,
        getMultiplier: state => state.multiplier,
    }
}
