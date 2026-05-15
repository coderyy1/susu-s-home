import BODENSEE_PHOTO from './photo/bodensee.js';
import DOLOMITI_PHOTO from './photo/dolomiti.js';
import FUNES_PHOTO from './photo/funes.js';

const QQ_ICON =  new URL('@/assets/img/fans/QQ.png', import.meta.url).href;
const BBLL_ICON =  new URL('@/assets/img/fans/bili.png', import.meta.url).href;
const TK_ICON =  new URL('@/assets/img/fans/tiktok.png', import.meta.url).href;
const YTB_ICON =  new URL('@/assets/img/fans/youtube.png', import.meta.url).href;
const GIT_ICON =  new URL('@/assets/img/fans/github.png', import.meta.url).href;
const MAIL_ICON =  new URL('@/assets/img/fans/email.png', import.meta.url).href;

export const PHOTO_LIST = {
  bodensee: BODENSEE_PHOTO,
  dolomiti: DOLOMITI_PHOTO,
  funes: FUNES_PHOTO,
};

export const GAME_PIC_LIST = {
  poe2: [
    // {
    //   id:1,
    //   url: FIRE_PIC,
    //   desc: 'poe2, in game'
    // },
    // {
    //   id:2,
    //   url: IRING_PIC,
    //   desc: 'poe2, in game, also ring'
    // },
  ],
  poe: [],
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
  {
    value: 'funes',
    text: '意大利，富内斯山谷',
  },
];

export const GAME_LIST = [
  {
    value: 'poe',
    text: '流放之路',
  },
  {
    value: 'poe2',
    text: '流放之路2',
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