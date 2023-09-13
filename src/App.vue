<template>
  <!-- Header Section -->
  <div class="header-section">
    <IconComponent icon="logo" />

    <div class="logo-text">
      BACKEND MINER
    </div>
  </div>

  <HomePage />
</template>

<script>
import HomePage from './components/HomePage/HomePage.vue'
import IconComponent from './components/IconComponent/IconComponent.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    IconComponent
  }
}
</script>

<style lang="scss">
@font-face {
	font-family: 'lato';
	src:  url('./assets/fonts/lato/lato-v17-latin-regular.ttf');
}

@font-face {
	font-family: 'poppins';
	src:  url('./assets/fonts/poppins/poppins-v15-latin-regular.ttf');
}

#app {
  // width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 112px;
  background-color: #191A29;
  color: #FFF;
  font-family: lato;
  font-weight: 400;
  font-size: 11px;
  font-style: normal;

  // Page Header
  .header-section {
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-top: 24px;
    font-family: poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 14px */
    letter-spacing: 2.8px;

    .logo-text {
      margin-left: 7px;
    }
  }
}
</style>
