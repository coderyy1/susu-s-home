<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <RouterLink class="logo" to="/">
        <img src="../assets/img/logo.png" alt="logo" />
      </RouterLink>
      <div class="list">
        <!-- <RouterLink class="items" to="/">欢迎</RouterLink> -->
        <RouterLink class="items" to="/about">苏苏</RouterLink>
        <RouterLink class="items" to="/games">游戏</RouterLink>
        <RouterLink class="items" to="/photos">摄影</RouterLink>
        <RouterLink class="items" to="/fans">社交</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .content {
    padding-left: 25%;
    padding-top: 30%;
    width: 100%;
    height: 100%;
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
    font-size: 36px;
    transition: all 0.223s ease-out;
    /* color: #fff; */
  }
  .items:hover{
    color: var(--main-color-b);
    font-size: 40px;
  }
</style>