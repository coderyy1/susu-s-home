<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import NavList from './components/NavList.vue'

const isPure = ref(true);
</script>

<template>
  <div class="navWrapper">
    <div class="navBlock"></div>
    <NavList class="navList"/>
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
  .mainView {
    width: 70%;
    height: 100%;
    padding: 32px 24px;
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
</style>
