<script setup>
  import { onMounted, ref } from 'vue';
  import { goTopInit } from '@/hooks/utils';

  onMounted(() => {
    goTopInit();
  });

  const TAB_MAP = [
    {
      name: '流放之路2',
      value: 'poe2',
    },
    {
      name: '流放之路',
      value: 'poe',
    },
    {
      name: '诛仙世界',
      value: 'ZXSJ',
    },
  ];

  const tab = ref(TAB_MAP[0]?.value);
</script>

<template>
  <div class="game">
    <div class="title">苏苏的游戏室~</div>
    <div class="gameBox">
      <template v-if="tab === TAB_MAP[0]?.value">
        <div class="subTitle">sub title</div>
        <div class="subTitle">sub title</div>
        <div class="items">
          <div class="pic">
            <img src="../assets/img/game/fire-helmet.png" />
          </div>
          <div class="desc">desc</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
  .game {
    position: relative;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }
  .title {
    margin-bottom: 32px;
    font-size: 36px;
  }
  .gameBox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 8px 16px;
    border: 1px solid var(--main-color-p);
    border-radius: 8px;
    row-gap: 38px;
  }
  .subTitle {
    /* margin-bottom: 32px; */
    font-size: 28px;
  }
  .items {
    /* display: flex;
    flex-wrap: wrap; */
  }
  .pic {
    width: 640px;
    margin-right: 24px;
    border: 1px solid #fff;
    border-radius: 8px;
    overflow: hidden;
  }
  .pic img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .desc {
    font-size: 28px;
    word-wrap: break-word;
    word-break: break-all;
  }

  @media screen and (max-width: 850px) {
    .pic {
      width: 240px;
      margin-right: 24px;
    }
  }
</style>
