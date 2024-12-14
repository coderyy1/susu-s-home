<script setup>
import { RouterView } from 'vue-router'
import NavList from './components/NavList.vue'
</script>

<template>
  <div class="navList">
    <NavList />
  </div>
  <div class="mainView">
    <RouterView />
  </div>
  <div class="tips">
    this is tips
  </div>
</template>

<style scoped>
  .navList {
    width: 18%;
    min-width: 144px;
  }
  .mainView {
    width: 70%;
    height: 100%;
    background-color: var(--main-color-b);
    box-sizing: border-box;
    box-shadow: 0 -4px 2px 4px #fff inset;
    overflow: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
  .mainView::-webkit-scrollbar {
    width: 0 !important;
  }
  .tips {
    width: 12%;
    background-color: var(--main-color-p);
  }

  /* small-width-devic */
  /* no right tips module */
  @media (width <= 850px) {
    .navList {
      width: 18%;
    }
    .mainView {
      width: 82%;
    }
    .tips {
      display: none;
    }
  }

  /* mini-width-devic */
  /* no left nav-list */
  @media (width <= 500px) {
    .navList {
      display: none;
    }
    .mainView {
      width: 100%;
    }
    .tips {
      display: none;
    }
  }
</style>
