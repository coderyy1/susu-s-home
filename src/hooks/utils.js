
// to page top, no scroll, use to init new page
export const goTopInit = () => {
  window.scrollTo(0, 0)
}

// return now photos to slice page
// reutrn [list, totalPage]
export const getPhotos = (page, pageSize, list) => {
  return [list.slice((page - 1) * pageSize, page * pageSize), Math.ceil(list.length / pageSize)];
}