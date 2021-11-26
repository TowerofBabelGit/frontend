<template>
  <div class="popup-container">
    <div class="popup-bg"></div>
    <div class="popup-slide">
      <div class="popup connect-wallet">
        <button @click="closeWindow" class="popup__close"></button>

        <div class="popup__content">

          <div class="popup__title">
            Connect your wallet
          </div>


          <button class="connect-wallet__btn metamask" @click="tryConnect('metamask')">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.851 4.86487L25.1782 15.8868L27.9067 9.39122L39.851 4.86487Z" fill="#E17726" stroke="#E17726" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.00635 4.86487L20.5485 15.9897L17.9506 9.39122L6.00635 4.86487Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.5682 30.4211L30.6642 36.4758L39.0237 38.8125L41.4184 30.5533L34.5682 30.4211Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.45349 30.5533L6.83364 38.8125L15.1787 36.4758L11.2892 30.4211L4.45349 30.5533Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.7288 20.1928L12.4067 23.7492L20.6792 24.1313L20.4035 15.0933L14.7288 20.1928Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M31.1286 20.1927L25.3669 14.9904L25.1782 24.1312L33.4507 23.7491L31.1286 20.1927Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1787 36.4758L20.1857 34.0216L15.8753 30.6121L15.1787 36.4758Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.6716 34.0216L30.6641 36.4758L29.982 30.6121L25.6716 34.0216Z" fill="#E27625" stroke="#E27625" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M30.6641 36.4758L25.6716 34.0215L26.078 37.3134L26.0345 38.7096L30.6641 36.4758Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1786 36.4758L19.8228 38.7096L19.7938 37.3134L20.1856 34.0215L15.1786 36.4758Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.9099 28.4372L15.7592 27.2027L18.6908 25.836L19.9099 28.4372Z" fill="#233447" stroke="#233447" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.9474 28.4372L27.1665 25.836L30.1126 27.2027L25.9474 28.4372Z" fill="#233447" stroke="#233447" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1786 36.4758L15.9042 30.4211L11.2891 30.5533L15.1786 36.4758Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.9529 30.4211L30.664 36.4758L34.568 30.5533L29.9529 30.4211Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M33.4506 23.7491L25.1781 24.1312L25.9473 28.4372L27.1664 25.836L30.1126 27.2027L33.4506 23.7491Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.7591 27.2027L18.6908 25.836L19.9099 28.4372L20.6791 24.1312L12.4066 23.7491L15.7591 27.2027Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.4066 23.7491L15.8752 30.6121L15.7591 27.2027L12.4066 23.7491Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M30.1126 27.2027L29.9819 30.6121L33.4506 23.7491L30.1126 27.2027Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.6791 24.1312L19.9099 28.4371L20.8823 33.5219L21.1 26.8206L20.6791 24.1312Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.1781 24.1312L24.7717 26.8059L24.9749 33.5219L25.9473 28.4371L25.1781 24.1312Z" fill="#E27525" stroke="#E27525" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.9474 28.4372L24.975 33.522L25.6716 34.0216L29.982 30.6122L30.1126 27.2027L25.9474 28.4372Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.7592 27.2027L15.8753 30.6122L20.1856 34.0216L20.8823 33.522L19.9099 28.4372L15.7592 27.2027Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.0345 38.7096L26.0781 37.3135L25.7007 36.9902H20.1567L19.7939 37.3135L19.8229 38.7096L15.1787 36.4758L16.8042 37.8279L20.0987 40.1351H25.7442L29.0532 37.8279L30.6642 36.4758L26.0345 38.7096Z" fill="#C0AC9D" stroke="#C0AC9D" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.6716 34.0216L24.975 33.522H20.8823L20.1857 34.0216L19.7938 37.3135L20.1567 36.9902H25.7007L26.078 37.3135L25.6716 34.0216Z" fill="#161616" stroke="#161616" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M40.475 16.6069L41.7086 10.5228L39.8509 4.86487L25.6716 15.5194L31.1286 20.1927L38.835 22.4706L40.5331 20.4573L39.7929 19.9135L40.9684 18.826L40.0686 18.1206L41.2442 17.2095L40.475 16.6069Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.14868 10.5228L5.39681 16.6069L4.59859 17.2095L5.78866 18.1206L4.88885 18.826L6.06441 19.9135L5.32424 20.4573L7.02227 22.4706L14.7287 20.1927L20.1857 15.5194L6.00636 4.86487L4.14868 10.5228Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M38.8349 22.4706L31.1285 20.1927L33.4506 23.7492L29.9819 30.6122L34.5681 30.5534H41.4183L38.8349 22.4706Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.7288 20.1927L7.02231 22.4706L4.45349 30.5534H11.2892L15.8753 30.6122L12.4067 23.7492L14.7288 20.1927Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.1782 24.1313L25.6717 15.5194L27.9067 9.39124H17.9507L20.1857 15.5194L20.6791 24.1313L20.8678 26.8353L20.8823 33.522H24.975L24.9895 26.8353L25.1782 24.1313Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.608108" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            Metamask
          </button>

          <button class="connect-wallet__btn walletConnect" @click="tryConnect('walletConnect')">
            <svg width="45" height="29" viewBox="0 0 45 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.21573 5.6835C16.5524 -1.82329 28.4475 -1.82329 35.7842 5.6835L36.6672 6.58696C37.034 6.9623 37.034 7.57084 36.6672 7.94618L33.6467 11.0367C33.4633 11.2244 33.1659 11.2244 32.9825 11.0367L31.7674 9.79346C26.6491 4.55653 18.3508 4.55653 13.2325 9.79346L11.9313 11.1249C11.7479 11.3126 11.4505 11.3126 11.2671 11.1249L8.24658 8.03435C7.87974 7.65901 7.87974 7.05046 8.24658 6.67513L9.21573 5.6835ZM42.0309 12.0751L44.7192 14.8257C45.086 15.201 45.086 15.8095 44.7192 16.1849L32.5976 28.5877C32.2308 28.963 31.636 28.963 31.2692 28.5877C31.2692 28.5877 31.2692 28.5877 31.2692 28.5877L22.6661 19.785C22.5744 19.6912 22.4257 19.6912 22.334 19.785C22.334 19.785 22.334 19.785 22.334 19.785L13.731 28.5877C13.3642 28.963 12.7694 28.963 12.4026 28.5877C12.4026 28.5877 12.4026 28.5877 12.4026 28.5877L0.280741 16.1847C-0.0860933 15.8094 -0.0860933 15.2008 0.280741 14.8255L2.969 12.0749C3.33583 11.6996 3.93059 11.6996 4.29742 12.0749L12.9007 20.8776C12.9924 20.9715 13.1411 20.9715 13.2328 20.8776C13.2328 20.8776 13.2328 20.8776 13.2328 20.8776L21.8356 12.0749C22.2024 11.6996 22.7972 11.6995 23.164 12.0749C23.164 12.0749 23.164 12.0749 23.164 12.0749L31.7673 20.8776C31.859 20.9715 32.0077 20.9715 32.0994 20.8776L40.7025 12.0751C41.0693 11.6997 41.6641 11.6997 42.0309 12.0751Z" fill="white"/>
            </svg>

            WalletConnect
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ConnectWallet",
  methods: {
    ...mapActions({
      connectWallet: 'wallet/connectWallet'
    }),
    detectMob() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
      ];

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    },
    tryConnect(wallet) {
      this.$emit('loading', true);
      this.connectWallet(wallet)
        .then(() => {
          this.$emit('loading', false);
          this.closeWindow();
        })
        .catch(err => {
          this.$emit('loading', false);
          if(err.message && err.message === 'not_installed' && this.detectMob()) {
            window.location.href = 'https://metamask.app.link/dapp/artbay.in.ua/home?lang=ua';
            return
          }
          if (!err.code) {
            this.$emit('error', err.message)
            return
          }
          switch (err.code) {
            case -32002:
              this.$emit('error', "You have already opened Metamask. Please, check window of your browser.")
              break;
            default:
              this.closeWindow();
              break;
          }
        })
    },
    closeWindow() {
      this.$emit("close");
    },
  }
}
</script>
