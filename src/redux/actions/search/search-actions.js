import unsplash from "../../../api/unsplash";

import { searchActionTypes } from "./search-action-types";

export const setSearchTerm = (term) => ({
  type: searchActionTypes.SET_SEARCH_TERM,
  payload: term,
});

export const searchPhotosStart = () => ({
  type: searchActionTypes.SEARCH_PHOTOS_START,
});

export const searchPhotosSuccess = (results) => ({
  type: searchActionTypes.SEARCH_PHOTOS_SUCCESS,
  payload: results,
});

export const searchPhotosFailure = (error) => ({
  type: searchActionTypes.SEARCH_PHOTOS_FAILURE,
  payload: error,
});

export const searchPhotos = (term, navigate) => {
  return async (dispatch) => {
    dispatch(searchPhotosStart());

    try {
      if (navigate) {
        navigate(`/search/${term}`);
      }

      const response = await unsplash.get("/search/photos", {
        params: {
          query: term,
          orientation: "squarish",
        },
      });

      setTimeout(() => {
        dispatch(searchPhotosSuccess(response.data.results));
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        dispatch(searchPhotosSuccess(error.message));
      }, 1500);
    }
  };
};

export const scrollPhotosStart = () => ({
  type: searchActionTypes.SCROLL_PHOTOS_START,
});

export const scrollPhotosSuccess = (results) => ({
  type: searchActionTypes.SCROLL_PHOTOS_SUCCESS,
  payload: results,
});

export const scrollPhotosFailure = (error) => ({
  type: searchActionTypes.SCROLL_PHOTOS_FAILURE,
  payload: error,
});

export const scrollPhotos = (term, page) => {
  return async (dispatch) => {
    dispatch(scrollPhotosStart());

    try {
      const response = await unsplash.get("/search/photos", {
        params: {
          query: term,
          page,
          orientation: "squarish",
        },
      });

      setTimeout(() => {
        dispatch(scrollPhotosSuccess(response.data.results));
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        dispatch(scrollPhotosFailure(error.message));
      }, 1500);
    }
  };
};
