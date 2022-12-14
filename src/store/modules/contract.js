import abi from '@/utils/abi';

export default {
    namespaced: true,
    state: {
        //contractAddress: '0x7DeeBC4FF5b7593cDa15af1B78fB63aA33bd5897',
        contractAddress: '0xa5db8CBeD3365b19a89d236FcBD2Eb9aaA6B6ded',
        abi: abi,
        multiplier: 1e18,
    },
    getters: {
        getContractAddress: state => state.contractAddress,
        getMultiplier: state => state.multiplier,
    }
}
