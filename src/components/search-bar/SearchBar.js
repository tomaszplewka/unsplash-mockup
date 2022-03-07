import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import Suggestions from "../suggestions/Suggestions";

import actions from "../../redux/actions";

import "./SearchBar.scss";

const SearchBar = ({
  term,
  areSuggestionsVisible,
  setTerm,
  searchPhotos,
  filterSuggestions,
  showSuggestions,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (term.length >= 3) {
      filterSuggestions(term);
    } else if (!areSuggestionsVisible) {
      return;
    } else {
      filterSuggestions("");
    }
  }, [term, filterSuggestions, areSuggestionsVisible]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    showSuggestions(false);
    searchPhotos(term, navigate);
  };

  const handleSearchInputChange = (e) => {
    setTerm(e.target.value);

    if (e.target.value.length >= 3 && !areSuggestionsVisible) {
      showSuggestions(true);
    } else if (e.target.value.length < 3 && areSuggestionsVisible) {
      showSuggestions(false);
    }
  };

  const handleSearchInputBlur = () => {
    showSuggestions(false);
  };

  const handleSearchInputFocus = () => {
    if (term.length >= 3) {
      showSuggestions(true);
    }
  };

  return (
    <form className="search-bar__form" onSubmit={handleSearchSubmit}>
      <div className="search-bar__input__wrapper">
        <input
          type="text"
          placeholder="Search for free awesome photos"
          className="search-bar__input"
          value={term}
          onChange={handleSearchInputChange}
          onBlur={handleSearchInputBlur}
          onFocus={handleSearchInputFocus}
        />
        <span className="search-bar__search-icon">&#9906;</span>
      </div>
      {areSuggestionsVisible ? <Suggestions /> : null}
    </form>
  );
};

const mapStateToProps = (state) => ({
  term: state.search.term,
  areSuggestionsVisible: state.suggestions.areSuggestionsVisible,
});

const mapDispatchToProps = {
  setTerm: actions.setSearchTerm,
  searchPhotos: actions.searchPhotos,
  filterSuggestions: actions.filterSuggestions,
  showSuggestions: actions.setSuggestionsVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
