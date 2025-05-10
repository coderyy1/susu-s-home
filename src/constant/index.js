const SEA_IMG =  new URL('@/assets/img/photos/sea.JPG', import.meta.url).href;
const CHAIR_IMG =  new URL('@/assets/img/photos/chair.JPG', import.meta.url).href;
const TREE_IMG =  new URL('@/assets/img/photos/seaandtree.JPG', import.meta.url).href;
const SNOW_IMG =  new URL('@/assets/img/photos/snow.JPG', import.meta.url).href;
const SNIGHT_IMG =  new URL('@/assets/img/photos/snownight.JPG', import.meta.url).href;
const WAYS_IMG =  new URL('@/assets/img/photos/waytosea.JPG', import.meta.url).href;
const SS_IMG =  new URL('@/assets/img/photos/susu.JPG', import.meta.url).href;


const FIRE_PIC =  new URL('@/assets/img/game/fire-helmet.png', import.meta.url).href;
const IRING_PIC =  new URL('@/assets/img/game/ice-ring.png', import.meta.url).href;


const QQ_ICON =  new URL('@/assets/img/fans/QQ.png', import.meta.url).href;
const BBLL_ICON =  new URL('@/assets/img/fans/bili.png', import.meta.url).href;
const TK_ICON =  new URL('@/assets/img/fans/tiktok.png', import.meta.url).href;
const YTB_ICON =  new URL('@/assets/img/fans/youtube.png', import.meta.url).href;
const GIT_ICON =  new URL('@/assets/img/fans/github.png', import.meta.url).href;
const MAIL_ICON =  new URL('@/assets/img/fans/email.png', import.meta.url).href;

export const PHOTO_LIST = {
  bodensee: [
    {
      id: 1,
      url: SEA_IMG,
      desc: '德国博登湖的照片',
    },
    {
      id: 2,
      url: CHAIR_IMG,
      desc: '一对孤单的椅子，好像坐在孤寂的天涯',
    },
    {
      id: 3,
      url: TREE_IMG,
      desc: '蔚蓝的海，以及满地落叶',
    },
    {
      id: 4,
      url: SNOW_IMG,
      desc: '家的雪景',
    },
    {
      id: 5,
      url: SNIGHT_IMG,
      desc: '安静的雪',
    },
    {
      id: 6,
      url: WAYS_IMG,
      desc: '通往海底世界的桥',
    },
    {
      id: 7,
      url: SS_IMG,
      desc: '独坐看海的苏苏~',
    },
  ],
  dolomiti: [

  ],
};

export const GAME_PIC_LIST = {
  poe2: [
    {
      id:1,
      url: FIRE_PIC,
      desc: 'poe2, in game'
    },
    {
      id:2,
      url: IRING_PIC,
      desc: 'poe2, in game, also ring'
    },
  ],
  poe: [],
  ZXSJ: [],
};

export const PLACE_LIST = [
  {
    value: 'bodensee',
    text: '德国，博登湖',
  },
  {
    value: 'dolomiti',
    text: '意大利，多洛米蒂',
  },
];

export const GAME_LIST = [
  {
    value: 'poe2',
    text: '流放之路2',
  },
  {
    value: 'poe',
    text: '流放之路',
  },
  {
    value: 'ZXSJ',
    text: '诛仙世界',
  },
];

export const MEDIA_LIST = [
  {
    name: 'QQ',
    icon: QQ_ICON,
    value: '1229379984',
    isLink: false,
    url: '',
  },
  {
    name: 'Bilibili',
    icon: BBLL_ICON,
    value: '西瓜可可Cokra',
    isLink: true,
    url: 'https://space.bilibili.com/50999235?spm_id_from=333.1007.0.0',
  },
  {
    name: '抖音',
    icon: TK_ICON,
    value: 'Yukii',
    isLink: false,
    url: '',
  },
  {
    name: 'YouTuBe',
    icon: YTB_ICON,
    value: 'SuperCater',
    isLink: true,
    url: 'https://www.youtube.com/@supercater-pf6ef',
  },
  {
    name: 'Github',
    icon: GIT_ICON,
    value: 'coderyy1',
    isLink: true,
    url: 'https://github.com/coderyy1',
  },
  {
    name: 'E-mail',
    icon: MAIL_ICON,
    value: 'XiGuaCoCo@outlook.com',
    isLink: false,
    url: '',
  },
];