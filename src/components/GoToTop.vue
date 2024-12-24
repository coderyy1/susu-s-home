<script setup>
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // 可选，平滑滚动效果
    });
  }
</script>

<template>
  <div class="comp" @click="toTop">
    <img src="../assets/img/upup.png" />
  </div>
</template>

<style scoped>
  .comp {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 66px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    transition: 0.6s;
    z-index: 99999;
  }
  .comp:hover {
    background-color: rgba(0, 0, 0, 0.98);
  }
  img {
    width: 50%;
    height: 50%;
    vertical-align: middle;
    transition: 0.6s;
  }
  .comp:hover img {
    transform: translateY(-4px);
  }

  @media screen and (max-width: 850px) {
    .comp {
      width: 48px;
      height: 48px;
      bottom: 78px;
      right: 14px;
      background-color: rgba(255, 255, 255, 0.65);
    }
    .comp:hover {
      background-color: rgba(255, 255, 255, 0.65);
    }
    img {
      width: 50%;
      height: 50%;
      vertical-align: middle;
      transition: 0.6s;
    }
    .comp:hover img {
      transform: translateY(0);
    }
  }
</style>