<template>
  <header class="header">
    <div class="header__img">
      <img src="@/assets/img/sun.png" alt="">
      <svg class="header__img-text" viewBox="0 0 70 70" width="60%">
        <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" fill="none" id="tophalf"/>
        <text>
          <textPath xlink:href="#tophalf" startOffset="30%">Lorem ipsum</textPath>
          <textPath xlink:href="#tophalf" startOffset="87%">Dolor sit</textPath>
        </text>
      </svg>
    </div>

    <div class="header-wrap">
     <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="#">Lorem ipsum</a>
        </li>
        <li class="header-nav__item">
          <a href="#">Dolor sit</a>
        </li>
      </ul>
    </nav>

     <div class="header__logo">
      <img src="@/assets/img/logo.png" alt="">
    </div>

      <nav class="header-nav header-nav--right">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="#">Consectetur</a>
        </li>
        <li class="header-nav__item">
          <a href="#">Adipiscing elit</a>
        </li>
      </ul>
    </nav>
    </div>

    <button class="page-btn" type="button">
      Connect wallet
    </button>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>