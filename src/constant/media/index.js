// media icon
const QQ_ICON =  new URL('@/assets/img/fans/QQ.png', import.meta.url).href;
const BBLL_ICON =  new URL('@/assets/img/fans/bili.png', import.meta.url).href;
const TK_ICON =  new URL('@/assets/img/fans/tiktok.png', import.meta.url).href;
const YTB_ICON =  new URL('@/assets/img/fans/youtube.png', import.meta.url).href;
const GIT_ICON =  new URL('@/assets/img/fans/github.png', import.meta.url).href;
const MAIL_ICON =  new URL('@/assets/img/fans/email.png', import.meta.url).href;

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