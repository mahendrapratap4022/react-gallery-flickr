import { getInitPhotosApi, getPhotoInfoApi } from '../rest-api/photo';

// toggleLoader
export function toggleLoader() {
  return {
    type: 'TOGGLE_LOADER',
  };
}

// change page
export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page,
  };
}

// change search
export function changeSearch(search) {
  return {
    type: 'CHANGE_SEARCH',
    search,
  };
}
// change sort
export function changeSort(sort) {
  return {
    type: 'CHANGE_SORT',
    sort,
  };
}

// next page
export function nextPage(page) {
  return (dispatch) => {
    dispatch(toggleLoader());
    dispatch(changePage(page));
    dispatch(loadPhotos()).then((x) => dispatch(toggleLoader()));
  };
}

// search
export function updateSearch(search) {
  return (dispatch) => {
    dispatch(toggleLoader());
    dispatch(changeSearch(search));
    dispatch(loadPhotos(true)).then((x) => dispatch(toggleLoader()));
  };
}

// sort
export function updateSort(sort) {
  return (dispatch) => {
    dispatch(toggleLoader());
    dispatch(changeSort(sort));
    dispatch(loadPhotos(true)).then((x) => dispatch(toggleLoader()));
  };
}

// add photo and init
export function loadPhotos(search = false) {
  return (dispatch) => {
    return getInitPhotosApi().then((photos) => {
      if (photos.code === 2) {
        dispatch(throwError(photos.text));
      } else {
        dispatch(search ? replacePhotos(photos.photo) : addPhotos(photos.photo));
        dispatch(addPagesNumber(photos.pages));
      }
    });
  };
}

export function throwError(text) {
  return {
    type: 'THROW_ERROR',
    text,
  };
}

export function addPhotos(photos) {
  return {
    type: 'ADD_PHOTOS',
    photos,
  };
}

export function replacePhotos(photos) {
  return {
    type: 'REPLACE_PHOTOS',
    photos,
  };
}

export function addPagesNumber(pagesNumber) {
  return {
    type: 'ADD_PAGES_NUM',
    pagesNumber,
  };
}

// get photo info
export function getPhotoInfo(photoId, index) {
  return (dispatch) => {
    return getPhotoInfoApi(photoId).then((info) => dispatch(addPhotoInfo(index, info)));
  };
}

export function addPhotoInfo(index, info) {
  return {
    type: 'ADD_PHOTO_INFO',
    index,
    info,
  };
}

// init App
export function initApp() {
  return (dispatch) => {
    dispatch(loadPhotos()).then((x) => dispatch(toggleLoader()));
  };
}
