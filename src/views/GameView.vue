<script setup>
  import { onMounted, ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { goTopInit, getPhotos } from '@/hooks/utils';
  import { GAME_PIC_LIST, GAME_LIST } from '../constant';

  import PageNav from '@/components/PageNav.vue';


  onMounted(() => {
    goTopInit();
  });

  const PAGE_SIZE = 4;

  const route = useRoute();
  const router = useRouter();

  const curPage = ref(Number(route?.query?.page) || 1);
  const gameValue = ref(route?.query?.game || GAME_LIST[0]?.value);

  const gamePicList = computed(() => (GAME_PIC_LIST[gameValue.value]));
  const nowGamePic = computed(() => (getPhotos(curPage.value, PAGE_SIZE, gamePicList.value)[0]));
  const totalPage = computed(() => (getPhotos(curPage.value, PAGE_SIZE, gamePicList.value)[1]));

  const pageChange = (page) => {
    curPage.value = page;
    router.replace(`/games?page=${page}&game=${gameValue.value}`);
    goTopInit();
  }

  const gameChange = (game) => {
    gameValue.value = game;
    curPage.value = 1;
    router.replace(`/games?page=1&game=${game}`);
    goTopInit();
  }

</script>

<template>
  <div class="game">
    <div class="title">苏苏的游戏室~</div>
    <div class="gameChoser">
      <a-select
        v-model:value="gameValue"
        class="aSelect"
        size="large"
        @change="gameChange"
      >
        <a-select-option v-for="game in GAME_LIST" :key="game.value" style="fontSize: 24px">{{ game.text }}</a-select-option>
      </a-select>
    </div>
    <div class="gameBox">
      <div class="items" v-for="game in nowGamePic" :key="game.id">
        <div class="pic">
          <img :src="game.url" />
        </div>
        <div class="desc" v-if="game?.desc">{{ game.desc }}</div>
      </div>
      <div v-if="nowGamePic?.length === 0" :style="{fontSize: '48px'}">no game pic now~</div>
    </div>
    <PageNav :cur-page="curPage" :total-page="totalPage" @change-page="pageChange"/>
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
  .gameChoser {
    margin-bottom: 24px;
    text-align: center;
  }
  .aSelect {
    min-width: 256px;
    /* padding: 4px 8px; */
  }
  .aSelect :deep(.ant-select-selection-item) {
    font-size: 24px;
  }
  .gameBox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 8px 16px;
    margin-bottom: 32px;
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
