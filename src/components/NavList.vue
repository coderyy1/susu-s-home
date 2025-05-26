<script setup>
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute();
  const router = useRouter();

  const routerReplace = (url) => {
    router.replace({
      path: url,
    });
  }
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="logo" @click="routerReplace('/')">
        <img src="../assets/img/logo.png" alt="logo" />
      </div>
      <div class="list">
        <div class="items" :class="{ active: route.name === 'about' }" @click="routerReplace('/about')">苏苏</div>
        <div class="items" :class="{ active: route.name === 'games' }" @click="routerReplace('/games?page=1&game=poe2')">游戏</div>
        <div class="items" :class="{ active: route.name === 'photo' }" @click="routerReplace('/photo?page=1&place=bodensee')">摄影</div>
        <div class="items" :class="{ active: route.name === 'fans' }" @click="routerReplace('/fans')">社交</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
  }
  .content {
    padding-left: 25%;
    padding-top: 30%;
    display: flex;
    flex-direction: column;
  }
  .logo {
    flex-shrink: 0;
    width: 96px;
    height: 96px;
    box-shadow: 0 0 1px 2px var(--main-color-b);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  .logo:hover {
    width: 100px;
    height: 100px;
    transform: translate(0, -8px);
    box-shadow: 0 0 2px 4px var(--main-color-b);
  }
  .logo img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .list {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
  }

  .items{
    /* margin: -4px 0; */
    display: inline-block;
    width: 120px;
    font-size: 36px;
    transition: all 0.223s ease-out;
    cursor: pointer;
    /* color: #fff; */
  }
  .items:hover{
    color: var(--main-color-b);
    font-size: 40px;
  }
  .active {
    color: var(--main-color-b);
    font-size: 40px;
  }
</style>