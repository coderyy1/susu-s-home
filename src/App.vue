<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import NavList from './components/NavList.vue'
import MobileNavList from './components/MobileNavList.vue';

const isPure = ref(true);
</script>

<template>
  <div class="navWrapper">
    <div class="navBlock"></div>
    <NavList class="navList"/>
  </div>
  <div class="mobileNav">
    <MobileNavList />
  </div>
  <div class="mainView">
    <RouterView />
  </div>
  <!-- <div class="tips">
    this is tips
  </div> -->
</template>

<style scoped>
  .navWrapper {
    position: relative;
    box-sizing: content-box;
  }
  .navList {
    position: fixed;
    left: 66px;
    top: 88px;
    width: 18%;
    min-width: 144px;
    box-sizing: content-box;
    /* background-color: var(--main-color-p); */
  }
  .navBlock {
    width: 18%;
    min-width: 144px;
  }
  .mobileNav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    width: 100%;
    height: 64px;
    background-color: var(--main-color-p);
    box-shadow: 0 0 1px 3px #fff;
    z-index: 999;
  }
  .mainView {
    width: 70%;
    height: 100%;
    padding: 32px 24px;
    margin-top: 140px;
    margin-bottom: 80px;
    /* background-color: var(--main-color-b); */
    background-color: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    border-radius: 8px;
    color: #fff;
  }
  .tips {
    width: 12%;
    /* background-color: var(--main-color-p); */
  }

  /* small-width-devic */
  /* no right tips module */
  @media screen and (width <= 1200px) {
    .navWrapper {
      display: none;
    }
    .mainView {
      width: 82%;
    }
    .tips {
      display: none;
    }
  }

  @media screen and (width <= 760px) {
    .mobileNav {
      display: block;
    }
    .mainView {
      width: 100%;
      min-height: 100vh;
      margin-top: 0;
      margin-bottom: 64px;
    }
  }
</style>
