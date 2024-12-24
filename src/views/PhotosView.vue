<script setup>
  import { onMounted, ref, computed } from 'vue';
  import { goTopInit, getPhotos } from '@/hooks/utils';
  import { PHOTO_LIST } from '../constant';

  import PageNav from '@/components/PageNav.vue';

  onMounted(() => {
    goTopInit();
  });

  const PAGE_SIZE = 3;

  const curPage = ref(1);

  const nowPhotos = computed(() => (getPhotos(curPage.value, PAGE_SIZE, PHOTO_LIST)[0]));
  const totalPage = computed(() => (getPhotos(curPage.value, PAGE_SIZE, PHOTO_LIST)[1]));

  const pageChange = (page) => {
    curPage.value = page;
    goTopInit();
  }

  
</script>

<template>
  <div class="photos">
    <div class="title">苏苏的照片墙~</div>
    <div class="photosBox">
      <div class="items" v-for="photo in nowPhotos" :key="photo.id">
        <div class="pic">
          <img :src="photo.url" />
        </div>
        <div class="desc" v-if="photo?.desc">{{ photo.desc }}</div>
      </div>
    </div>
    <PageNav :cur-page="curPage" :total-page="totalPage" @change-page="pageChange"/>
  </div>
</template>

<style scoped>
  .photos {
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
  .photosBox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 32px;
    padding: 8px 16px;
    border: 1px solid var(--main-color-p);
    border-radius: 8px;
    row-gap: 38px;
  }
  .items {

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
