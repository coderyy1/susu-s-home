<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import NavList from './components/NavList.vue'
import MobileNavList from './components/MobileNavList.vue';
import GoToTop from './components/GoToTop.vue';

const onScrollFn = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 600) {
    if (showToTop.value) {
      return;
    }
    showToTop.value = true;
  } else {
    if (!showToTop.value) {
      return;
    }
    showToTop.value = false;
  }
}

const isPure = ref(true);
const showToTop = ref(false);

onMounted(() => {
  document.addEventListener('scroll', onScrollFn)
});

onUnmounted(() => {
  document.removeEventListener('scroll', onScrollFn);
});

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
    <div class="ll">
      <img src="./assets/img/gif/ll.gif" />
    </div>
    <div class="gip">
      <img src="./assets/img/gif/giphy.gif" />
    </div>
    <RouterView />
  </div>
  <GoToTop v-if="showToTop"/>
  <!-- <div class="tips">
    this is tips
  </div> -->
</template>

<style scoped>
  .navWrapper {
    position: relative;
    box-sizing: content-box;
    z-index: 999;
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
    position: relative;
    width: 70%;
    height: 100%;
    padding: 32px 24px;
    margin-top: 140px;
    margin-bottom: 80px;
    /* background-color: var(--main-color-b); */
    background-color: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    border-radius: 8px;
    /* backdrop-filter: blur(10px); */
    color: #fff;
    z-index: 100;
  }
  .ll {
    position: absolute;
    top: 0;
    left: -9%;
    display: inline-block;
    width: 220px;
    z-index: 100;
    user-select: none;
  }
  .ll img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .gip {
    position: absolute;
    top: -24px;
    right: -24px;
    display: inline-block;
    width: 140px;
    z-index: 100;
    user-select: none;
  }
  .gip img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .tips {
    width: 12%;
    /* background-color: var(--main-color-p); */
  }

  /* small-width-devic */
  /* no right tips module */
  @media screen and (max-width: 1200px) {
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

  @media screen and (max-width: 1040px) {
    .mobileNav {
      display: block;
      height: 120px;
    }
    .mainView {
      width: 100%;
      min-height: 100vh;
      margin-top: 0;
      margin-bottom: 0;
    }
    .gip {
      display: none;
    }
  }

  @media screen and (max-width: 960px) {
    .mobileNav {
      display: block;
      height: 64px;
    }
    .mainView {
      width: 100%;
      min-height: 100vh;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 72px;
    }
  }
</style>
