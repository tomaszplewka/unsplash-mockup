import { combineReducers } from "redux";

import { searchReducer } from "./search/search-reducer";

import { suggestionsReducer } from "./suggestions/suggestions.reducer";

export default combineReducers({
  search: searchReducer,
  suggestions: suggestionsReducer,
});
