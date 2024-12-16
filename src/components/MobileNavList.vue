<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute();


</script>

<template>
  <div class="comp">
    <RouterLink class="items" :class="{ active: route.name === 'home' }" to="/">简介</RouterLink>
    <RouterLink class="items" :class="{ active: route.name === 'about' }" to="/about">苏苏</RouterLink>
    <RouterLink class="items" :class="{ active: route.name === 'games' }" to="/games">游戏</RouterLink>
    <RouterLink class="items" :class="{ active: route.name === 'photos' }" to="/photos">摄影</RouterLink>
    <RouterLink class="items" :class="{ active: route.name === 'fans' }" to="/fans">社交</RouterLink>
  </div>
</template>

<style scoped>
  .comp {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .items {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  .active {
    color: var(--main-color-b);
    font-size: 20px;
  }

  @media screen and (max-width: 1040px) {
    .items {
      font-size: 32px;
    }
    .active {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 960px) {
    .items {
      font-size: 18px;
    }
    .active {
      font-size: 20px;
    }
  }
</style>