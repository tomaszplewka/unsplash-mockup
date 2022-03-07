import data from "../../../components/suggestions/data";

export const filteredSuggestions = (term) =>
  data.filter((word) => word.includes(term.toLowerCase()));
