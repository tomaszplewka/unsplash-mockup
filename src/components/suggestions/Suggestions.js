import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

import actions from "../../redux/actions";

import "./Suggestions.scss";

const Suggestions = ({
  filteredSuggestions,
  setTerm,
  searchPhotos,
  showSuggestions,
}) => {
  const navigate = useNavigate();
  const params = useParams();

  const handleSuggestionListClick = (e) => {
    if (e.target.getAttribute("data-value") === params.searchTerm) {
      return;
    }

    setTerm(e.target.getAttribute("data-value"));
    showSuggestions(false);
    searchPhotos(e.target.getAttribute("data-value"), navigate);
  };

  const renderedSuggestions = filteredSuggestions.map((suggestion, key) => (
    <li className="suggestions__list__item" key={key} data-value={suggestion}>
      {suggestion}
    </li>
  ));

  return (
    <div
      className={`${
        renderedSuggestions.length > 3 ? "overflow-scroll" : ""
      } suggestions__wrapper`}
    >
      <ul className="suggestions__list" onMouseDown={handleSuggestionListClick}>
        {renderedSuggestions.length ? (
          renderedSuggestions
        ) : (
          <li className="suggestions__list__item">No results</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredSuggestions: state.suggestions.filteredSuggestions,
});

const mapDispatchToProps = {
  setTerm: actions.setSearchTerm,
  searchPhotos: actions.searchPhotos,
  showSuggestions: actions.setSuggestionsVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
