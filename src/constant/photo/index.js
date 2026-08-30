import BODENSEE_PHOTO from './bodensee.js';
import DOLOMITI_PHOTO from './dolomiti.js';
import FUNES_PHOTO from './funes.js';
import PORTUGAL_OTHERS from './portugal/others.js'
import PORTUGAL_ESTRELA from './portugal/estrela.js'
import TRIP_PHOTO from './trip.js';

export const PHOTO_LIST = {
  bodensee: BODENSEE_PHOTO,
  dolomiti: DOLOMITI_PHOTO,
  funes: FUNES_PHOTO,
  portugal_others: PORTUGAL_OTHERS,
  portugal_estrela: PORTUGAL_ESTRELA,
  trip: TRIP_PHOTO,
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
  {
    value: 'portugal_others',
    text: '葡萄牙',
  },
  {
    value: 'portugal_estrela',
    text: '葡萄牙，星星山estrela',
  },
  {
    value: 'trip',
    text: '旅途中的见闻',
  },
];