import { suggestionsActionTypes } from "../../actions/suggestions/suggestions-action-types";

const INITIAL_STATE = {
  filteredSuggestions: [],
  areSuggestionsVisible: false,
};

export const suggestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case suggestionsActionTypes.FILTER_SUGGESTIONS:
      return {
        ...state,
        filteredSuggestions: action.payload,
      };
    case suggestionsActionTypes.SET_SUGGESTIONS_VISIBILITY:
      return {
        ...state,
        areSuggestionsVisible: action.payload,
      };
    default:
      return state;
  }
};
