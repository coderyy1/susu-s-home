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
        <div class="subTitle">流放之路2</div>
        <div class="subTitle">锐眼毒气箭，走纯电，目前三体~</div>
        <div class="items">
          <div class="pic">
            <img src="../assets/img/game/fire-helmet.png" />
          </div>
          <div class="desc">点燃头，自动引爆毒气箭嘻嘻(开心)</div>
        </div>
        <div class="items">
          <div class="pic">
            <img src="../assets/img/game/light-gloves.png" />
          </div>
          <div class="desc">触电手，感电 + 触电，安全满满伤害高高~</div>
        </div>
        <div class="items">
          <div class="pic">
            <img src="../assets/img/game/ice-ring.png" />
          </div>
          <div class="desc">击碎戒指，对群怪plus，销毁尸体防止自爆~</div>
        </div>
        <div class="items">
          <div class="desc" style="font-size: 34px; color: var(--height-light-color-p);">机体基本开发完毕，开心开刷，后续换武器 + 装备提升伤害和生存ing~</div>
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
  }
  .pic img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .desc {
    font-size: 28px;
  }

  @media screen and (max-width: 850px) {
    .pic {
      width: 240px;
      margin-right: 24px;
    }
  }
</style>
