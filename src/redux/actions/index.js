import {
  setSearchTerm,
  searchPhotos,
  scrollPhotos,
} from "./search/search-actions";

import {
  filterSuggestions,
  setSuggestionsVisibility,
} from "./suggestions/suggestions-actions";

const actions = {
  setSearchTerm,
  searchPhotos,
  scrollPhotos,
  filterSuggestions,
  setSuggestionsVisibility,
};

export default actions;
