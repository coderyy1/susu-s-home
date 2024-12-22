<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { goTopInit } from '@/hooks/utils';

  const line = ref(0);
  const imgNo = ref(0);

  let timer = null;

  onMounted(() => {
    goTopInit();
    // time Interval
    const getTimer = () => {
      return setTimeout(() => {
        if (line.value >= 6) {
          timer = null;
          return;
        }
        line.value++
        timer = getTimer();
      }, 1000);
    }

    timer = getTimer();
  })

  onUnmounted(() => {
    timer && clearTimeout(timer);
  })

</script>

<template>
  <main class="content">
    <!-- title -->
    <div class="title">
      <span>欢迎来到苏苏的家~</span>
      <div class="cat">
        <img src="../assets/img/home/smooth.gif" />
      </div>
    </div>
    <!-- line 1 -->
    <div class="desc" :style="line >= 1 ? {  } : { opacity: 0 }">
      这里是一个渴望成为
      <span style="font-size: 32px; color: var(--height-light-color-p);">女生</span>
      的可爱
      <span style="text-decoration: line-through; text-decoration-color: var(--main-color-p); margin-left: 8px;">男孩</span>
      ，
    </div>
    <!-- line 2 -->
    <div class="desc"  :style="line >= 2 ? {  } : { opacity: 0 }">
      名字叫
      <span style="color: var(--main-color-p);">「苏苏」</span>
    </div>
    <!-- line 3 -->
    <div class="desc"  :style="line >= 3 ? {  } : { opacity: 0 }">
      这里是苏苏的主页
      <span class="home">也是苏苏的家 (*≧▽≦)</span>
    </div>
    <!-- line 4 -->
    <div class="desc"  :style="line >= 4 ? {  } : { opacity: 0 }">
      关于苏苏的所有东西，都可以在这里找到哦
    </div>
    <!-- line 5 -->
    <div class="desc"  :style="line >= 5 ? {  } : { opacity: 0 }">
      希望我们可以成为朋友
    </div>
    <!-- line 6 -->
    <div class="desc"  :style="line >= 6 ? {  } : { opacity: 0 }">
      拥有相同的爱好，一起交流
    </div>
    <div class="sanyue">
      <div class="swiper">
        <img src="../assets/img/home/sanyue3.jpg" />
        <img src="../assets/img/home/sanyue2.jpg" />
        <img src="../assets/img/home/sanyue1.jpg" />
        <img src="../assets/img/home/sanyue4.jpg" />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .content {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
    overflow: hidden;
  }
  .title {
    position: relative;
    font-size: 66px;
    font-weight: 600;
    text-align: center;
    color: var(--main-color-p);
    text-shadow: 1px 1px 4px #fff;
    z-index: 100;
  }
  .cat {
    position: absolute;
    left: -250px;
    /* key end  900px total*/
    /* left: 650px; */
    top: -198px;
    width: 320px;
    animation: catRun 5s infinite linear;
  }
  @keyframes catRun {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(400%);
    }
  }
  .cat img {
    width: 100%;
    height: 100%;
  }
  .desc {
    position: relative;
    padding: 12px;
    font-size: 25px;
    color: #fff;
    transition: all ease-in-out 1s;
    z-index: 100;
  }
  .home {
    padding-left: 12px;
    font-size: 36px;
    color: var(--main-color-p);
  }
  .sanyue {
    position: absolute;
    right: 12px;
    /* bottom: -24px; */
    bottom: 12px;
    width: 300px;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 1px 1px 2px #efefef;
    z-index: 0;
  }

  /* stay: 10%, swap: 7% */
  @keyframes swiper {
    0% {transform: translateX(0);}
    10% {transform: translateX(0);}
    17% {transform: translateX(-300px);}
    27% {transform: translateX(-300px);}
    34% {transform: translateX(-600px);}
    44% {transform: translateX(-600px);}
    51% {transform: translateX(-900px);}
    60% {transform: translateX(-900px);}
    67% {transform: translateX(-600px);}
    77% {transform: translateX(-600px);}
    84% {transform: translateX(-300px);}
    94% {transform: translateX(-300px);}
    100% {transform: translateX(0);}

    /* 100% {
      transform: translateX(-1200px);
    } */
  }
  .swiper {
    width: 300px;
    display: flex;
    /* transform: translateX(-300px); */
    animation: swiper 16s ease-in-out infinite;
  }
  .sanyue img {
    width: 100%;
    /* height: 100%; */
    vertical-align: middle;
  }

  

  @media screen and (max-width: 1000px) {
    .sanyue {
      /* width: 160px; */
      display: none;
    }
    .content {
      padding-bottom: 0px;
    }
  }

  @media screen and (max-width: 850px) {
    .sanyue {
      display: none;
    }
    .content {
      padding-bottom: 0px;
    }
  }
</style>