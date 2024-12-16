<script setup>
  import dayjs from 'dayjs';

  let now = dayjs();
  let beginTime = dayjs('2014-10-30');
  let msTime = now.diff(beginTime);
  let years = now.diff(beginTime, 'year');
  let month = now.diff(beginTime, 'month') % 12;
  let days = now.diff(beginTime, 'day');
  let pureDays = now.date() + 2;
</script>

<template>
  <div class="comp">
    <div class="title">吃糖已经：</div>
    <div class="heighText">{{ years }}</div>
    <div>年</div>
    <div class="heighText">{{ month }}</div>
    <div>个月</div>
    <div class="heighText">{{ pureDays }}</div>
    <div>天，</div>
    <div>一共</div>
    <div class="heighText">{{ days }}</div>
    <div>天</div>
  </div>
</template>

<style scoped>
  .comp {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 36px;
  }
  .title {
    font-size: 42px;
  }
  .heighText {
    color: var(--height-light-color-p);
    font-size: 42px;
    padding: 0 8px;
  }
</style>