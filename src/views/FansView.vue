<script setup>
import { onMounted } from 'vue';
import { goTopInit } from '@/hooks/utils';
import { MEDIA_LIST } from '../constant';

  onMounted(() => {
    goTopInit();
  });
</script>

<template>
  <div class="fans">
    <div class="title">
      这里是苏苏的社交媒体：
    </div>
    <div class="tips">苏苏会不定期看各个媒体账号以及进行内容更新，如果有急事可以尝试发E-mail，这个是苏苏可以最直观看到的渠道哦，添加QQ请备注从主页来的~</div>
    <div class="mediaBox">
      <div class="items" v-for="item in MEDIA_LIST" :key="item.name">
        <div class="icon">
          <img :src="item.icon" />
        </div>
        <div class="text">{{ `${item.name}：` }}</div>
        <a class="text" v-if="item.isLink" target="_blank" :href="item.url">{{ item.value }}</a>
        <div class="text" v-else>{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fans {
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
  .tips {
    padding-left: 64px;
    margin-bottom: 32px;
    font-size: 28px;
  }
  .mediaBox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 8px 16px;
    border: 1px solid var(--main-color-p);
    border-radius: 8px;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }
  .icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
  .icon img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .text {
    margin-left: 4px;
    font-size: 44px;
    color: #fff;
    word-wrap: break-word;
    word-break: break-all;
  }

  @media screen and (max-width: 850px) {
    .text{
      font-size: 24px;
    }
    .icon {
      width: 36px;
      height: 36px;
      flex-shrink: 0;
    }
  }
</style>
