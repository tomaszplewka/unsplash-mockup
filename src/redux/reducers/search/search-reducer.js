import { searchActionTypes } from "../../actions/search/search-action-types";

const INITIAL_STATE = {
  term: "",
  results: [],
  isFetching: false,
  error: null,
  onScrollFetching: false,
  onScrollFetchingError: null,
  photosPage: 0,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };
    case searchActionTypes.SEARCH_PHOTOS_START:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    case searchActionTypes.SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isFetching: false,
        photosPage: 1,
      };
    case searchActionTypes.SEARCH_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case searchActionTypes.SCROLL_PHOTOS_START:
      return {
        ...state,
        onScrollFetching: !state.onScrollFetching,
      };
    case searchActionTypes.SCROLL_PHOTOS_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...action.payload],
        onScrollFetching: false,
        photosPage: state.photosPage + 1,
      };
    case searchActionTypes.SCROLL_PHOTOS_FAILURE:
      return {
        ...state,
        onScrollFetchingError: action.payload,
        onScrollFetching: false,
      };
    default:
      return state;
  }
};
