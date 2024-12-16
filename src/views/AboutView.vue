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
    <div class="sanyue">
      <span style="color: var(--main-color-p);">小三月</span>
      <span>单推人！</span>
      <span style="color: var(--main-color-p);">三月七</span>
      <span>天下第一可爱~</span>
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
      <div>🍭 苏苏的爱好很多呢：</div>
      <div class="textBox">
        <span>平时喜欢听歌、看视频，不过不喜欢看电影。</span>
        <div>大多数时候会更喜欢宅在家里，捣鼓捣鼓前端相关的东西；天气好的时候有时会出门拍照(拍自己和风景，都拍)。</div>
        <div>喜欢玩无人机，喜欢在空中飞的那种感觉。</div>
        <div>平时也会玩游戏，很多都有玩过，但是现在在国外，所以玩的比较少啦。</div>
        <div>MMO高度爱好者~</div>
        <div>流放之路2ing~</div>
      </div>
    </div>
    <!-- <div class="divider" /> -->
    <div class="eat">
      <div>🍧 喜欢的食物：</div>
      <div class="textBox">
        <div>各种甜品，但是又怕长胖。</div>
        <div>喜欢比较辣的菜，最喜欢吃的菜是油豆腐炒肉和芹菜炒肉。但是现在也很喜欢吃清淡一点的(其实主要就是指一些广东菜)，因为一些比较神奇的原因。</div>
        <div>尤其钟爱各种面类&粉类：常德米粉！豌杂面、小面以及热干面！</div>
        <div>喜欢喝咖啡(美式&不加糖)，奶茶也不错(因为在长沙所以喜欢茶颜和另一个奶茶品牌)。</div>
        <div>喜欢喝汽水，尤其是可乐，一定要是罐装加普通可乐，不太喜欢无糖可乐。</div>
      </div>
    </div>
    <!-- <div class="divider" /> -->
    <div class="tang">
      <div>🏳️‍⚧️ 关于药：</div>
      <div class="textBox">
        <div>也就是小药娘们口中俗称的「糖」。</div>
        <div>抗雄：以前用 “色普龙” ，现在换成 “比卡鲁胺” ，效果和副作用会好很多。</div>
        <div>雌激素：以前用 “补佳乐” 和 “日雌” ，现在换成 “环戊丙酸雌二醇” ，更长效，注射次数更少，因为苏苏晕针晕血。</div>
      </div>
    </div>
    <div class="tips">
      <div>！！！注意：</div>
      <div class="textBox">
        <div>苏苏的精神状态很差，有严重的精神疾病和心理问题。</div>
        <div>有严重双相和性别焦虑，最喜欢的称呼是 “姐姐”，请不要用带有侮辱性或者性别指向过于强(指向 “男性”)的称呼。</div>
        <div>如果不太方便的话，直接叫 “苏苏” 是最好的。</div>
        <div>是个疯批，情绪波动极大，有严重的自毁、自杀倾向。</div>
        <div>战斗力极强，行为超级极端，注意躲避。</div>
      </div>
    </div>
  </div>
</template>

<style>
  .about {
    position: relative;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    z-index: 100;
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
  .sanyue {
    font-size: 42px;
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
  .eat {
    /* margin-top: 38px; */
  }
  .textBox {
    margin-top: 12px;
    margin-bottom: 24px;
    padding: 8px 16px;
    /* display: inline-block; */
    border: 1px solid var(--main-color-p);
    border-radius: 8px;
  }
</style>
