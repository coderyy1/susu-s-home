// photo info
import { PHOTO_LIST, PLACE_LIST } from './photo';

// game info
import { GAME_IMG_LIST, GAME_LIST } from './game';

// media info
import { MEDIA_LIST } from './media';

export const PHOTO_INFO = {
  photoList: PHOTO_LIST,
  placeList: PLACE_LIST,
};

export const GAME_INFO = {
  gameImgList: GAME_IMG_LIST,
  gameTYPEList: GAME_LIST,
};

export const MEDIA_INFO = {
  ...MEDIA_LIST
};