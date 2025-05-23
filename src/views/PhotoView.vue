<script setup>
  import { onMounted, ref } from 'vue';
  import { goTopInit } from '@/hooks/utils';
  import { PLACE_LIST } from '../constant';
  const imgBaseUrl = import.meta.env.VITE_IMG_BASE_URL;
  import { usePagination } from '@/hooks/usePagination';

  import api from '@/hooks/axios';

  import PageNav from '@/components/PageNav.vue';

  const PAGE_SIZE = 3;

  const photoList = ref([]);
  const totalPages = ref(0);

  const fetchPhotoList = async (page, place) => {
    try {
      const data = await api.post('/photo/getPhotoList', { 
        page,
        pageSize: PAGE_SIZE,
        type: place,
       });
      photoList.value = data?.data?.photoList.map(photo => ({
        ...photo,
        url: imgBaseUrl + photo?.url,
      }));
      totalPages.value = data?.data?.totalPages;
    } catch (err) {
      console.log('error: ', err);
      
    }
  }

  const { state, updateQuery } = usePagination({
    defaultQuery: { page: 1, place: PLACE_LIST[0].value },
    fetchFn: fetchPhotoList,
    typeName: 'place',
  });

  onMounted(() => {
    goTopInit();
  });

  const pageChange = (page) => {
    updateQuery('page', page);
    goTopInit();
  }

  const placeChange = (place) => {
    updateQuery('place', place);
    goTopInit();
  }

  
</script>

<template>
  <div class="photos">
    <div class="title">苏苏的照片墙~</div>
    <div class="placeChoser">
      <a-select
        v-model:value="state.place"
        class="aSelect"
        size="large"
        @change="placeChange"
      >
        <a-select-option v-for="place in PLACE_LIST" :key="place.value" style="fontSize: 24px">{{ place.text }}</a-select-option>
        <a-select-option style="fontSize: 24px" disabled>正在旅行中~</a-select-option>
      </a-select>
    </div>
    <div class="photosBox">
      <div class="items" v-for="photo in photoList" :key="photo.id">
        <div class="pic">
          <img :src="photo.url" />
        </div>
        <div class="desc" v-if="photo?.desc">{{ photo.desc }}</div>
      </div>
      <div v-if="photoList?.length === 0" :style="{fontSize: '48px'}">no photo now~</div>
    </div>
    <PageNav :cur-page="state.page" :total-page="totalPages" @change-page="pageChange"/>
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
  .placeChoser {
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
  .photosBox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 32px;
    padding: 8px 16px;
    min-height: 100vh;
    border: 1px solid var(--main-color-p);
    border-radius: 8px;
    row-gap: 38px;
  }
  .items {

  }
  .pic {
    width: 640px;
    min-height: 77px;
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
