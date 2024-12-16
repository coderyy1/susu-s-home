<script setup>
  const MEDIA_LIST = [
    {
      name: 'QQ',
      icon: '/src/assets/img/fans/QQ.png',
      value: '1229379984',
      isLink: false,
      url: '',
    },
    {
      name: 'Bilibili',
      icon: '/src/assets/img/fans/bili.png',
      value: '西瓜可可Cokra',
      isLink: true,
      url: 'https://space.bilibili.com/50999235?spm_id_from=333.1007.0.0',
    },
    {
      name: '抖音',
      icon: '/src/assets/img/fans/tiktok.png',
      value: 'Yukii',
      isLink: false,
      url: '',
    },
    {
      name: 'YouTuBe',
      icon: '/src/assets/img/fans/youtube.png',
      value: 'SuperCater',
      isLink: true,
      url: 'https://www.youtube.com/@supercater-pf6ef',
    },
    {
      name: 'Github',
      icon: '/src/assets/img/fans/github.png',
      value: 'coderyy1',
      isLink: true,
      url: 'https://github.com/coderyy1',
    },
  ];
</script>

<template>
  <div class="fans">
    <div class="title">
      这里是苏苏的社交媒体：
    </div>
    <div class="tips">苏苏会不定期看各个媒体账号以及进行内容更新，如果有急事可以尝试发E-mail，这个是苏苏可以最直观看到的媒体渠道哦</div>
    <div class="mediaBox">
      <div class="items" v-for="item in MEDIA_LIST">
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
  }
</style>
