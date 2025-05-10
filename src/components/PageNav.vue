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
    <a-button size="large" type="primary" @click="toPrePage" v-if="curPage !== 1">上一页</a-button>
    <a-button size="large" :disabled="curPage === item" type="primary" v-for="item in btnList" :key="item" @click="toNumPage(item)">{{ item }}</a-button>
    <a-button size="large" type="primary" @click="toNextPage" v-if="curPage < totalPage">下一页</a-button>
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
  .comp:deep(.ant-btn-primary:disabled){
    color: #fff;
  }
  .comp:deep(.ant-btn) {
    padding: 4px 8px;
    min-width: 44px;
    width: auto;
    height: auto;
    font-size: 24px;
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