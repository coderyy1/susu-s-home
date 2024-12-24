<script setup>
  import { computed } from 'vue';
  const { curPage = 1, totalPage = 4 } = defineProps({
    curPage: Number,
    totalPage: Number,
  });

  const emit = defineEmits(['changePage']);
  

  const btnList = computed(() => {
    let list = [];
    for(let i = 1; i <= totalPage; i++) {
      list.push(i);
    };
    return list;
  });

  const toPrePage = () => {
    emit('changePage', curPage - 1);
  }
  
  const toNextPage = () => {
    emit('changePage', curPage + 1);
  }

  const toNumPage = (toPage) => {
    if (curPage === toPage) {
      return;
    }
    emit('changePage', toPage);
  }

</script>

<template>
  <div class="comp">
    <div class="prePage btn" @click="toPrePage" v-if="curPage !== 1">上一页</div>
    <div class="btn" :class="{ active: curPage === item }" v-for="item in btnList" :key="item" @click="toNumPage(item)">{{ item }}</div>
    <div class="nextPage btn" @click="toNextPage" v-if="curPage < totalPage">下一页</div>
  </div>
</template>

<style scoped>
  .comp {
    display: flex;
    align-items: center;
    column-gap: 8px;
    row-gap: 8px;
    flex-wrap: wrap;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 36px;
    height: 36px; */
    padding: 4px 8px;
    min-width: 48px;
    font-size: 22px;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 8px;
    user-select: none;
  }
  .btn:hover {
    color: var(--height-light-color-p);
    border-color: var(--height-light-color-p);
    transition: 0.3s;
  }
  .active {
    color: var(--height-light-color-p);
    border-color: var(--height-light-color-p);
    cursor: not-allowed;
  }

  @media screen and (max-width: 850px) {
    .btn {
      font-size: 14px;
    }
    .btn:hover {
      color: #fff;
      border-color: #fff;
      transition: 0.3s;
    }
    .active {
      color: var(--height-light-color-p);
      border-color: var(--height-light-color-p);
      cursor: not-allowed;
    }
  }
</style>