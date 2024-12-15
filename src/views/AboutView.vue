<script setup>
  import Timer from '@/components/Timer.vue';

  const MTF_WIKI_URL = 'https://mtf.wiki/zh-cn/docs/useful-info/colloquialism/';
</script>

<template>
  <div class="about">
    <div class="name">
      这里是
      <span class="heighLine">「苏苏」</span>
    </div>
    <div class="transpart">
      <div>
        苏苏是一只
        <a :href="MTF_WIKI_URL" target="_blank" class="midLine">小药娘🍥</a>
        哦，
      </div>
      <div>
        <Timer />
      </div>
    </div>
    <div class="divider" />
    <div>
      <span>苏苏是程序员哦(前端)：</span>
      <div class="jobList">
        <a href="https://www.typescriptlang.org/" target="_blank" style="color: #3178c6;">TS</a>，
        <a href="https://react.dev/" target="_blank" style="color: #087ea4;">React</a>，
        <a href="https://cn.vuejs.org/" target="_blank" style="color: #33a06f;">Vue</a>，
        <a href="https://nextjs.org/" target="_blank" style="color: #000;">Next</a>，
        <a href="https://umijs.org/" target="_blank" style="color: #0273dc;">Umi</a>，
        <a href="https://docs.taro.zone/docs/" target="_blank" style="color: #0000c2;">Taro</a>
      </div>
    </div>
    <div class="hob">
      <span>苏苏的爱好很多呢：</span>
      <span>平时喜欢听歌、看视频，不过不喜欢看电影。</span>
      <div>大多数时候会更喜欢宅在家里，捣鼓捣鼓前端相关的东西；天气好的时候有时会出门拍照</div>
    </div>
  </div>
</template>

<style>
  .about {
    font-size: 25px;
    display: flex;
    flex-direction: column;
  }
  .name {
    position: relative;
    font-size: 36px;
  }
  .heighLine {
    font-size: 48px;
    color: var(--main-color-p);
  }
  .midLine {
    font-size: 36px;
    color: var(--height-light-color-p);
  }
  .transpart {
    padding-left: 24px;
    padding-top: 16px;
  }
  .divider {
    margin: 24px 0;
    height: 0;
    width: 70%;
    border-bottom: 1px solid #fff;
    align-self: center;
  }
  .jobList {
    display: inline-block;
    padding: 8px 12px;
    background-color: #dedede;
    color: #000;
    border-radius: 8px;
    box-shadow: 0 0 1px 2px #fff;
  }
  .hob {
    margin-top: 38px;
  }
</style>
