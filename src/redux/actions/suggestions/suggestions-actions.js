import { suggestionsActionTypes } from "./suggestions-action-types";

import { filteredSuggestions } from "./suggestions-helpers";

export const filterSuggestions = (term) => ({
  type: suggestionsActionTypes.FILTER_SUGGESTIONS,
  payload: filteredSuggestions(term),
});

export const setSuggestionsVisibility = (isVisible) => ({
  type: suggestionsActionTypes.SET_SUGGESTIONS_VISIBILITY,
  payload: isVisible,
});
