import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router";

import SearchBar from "../../search-bar/SearchBar";
import PhotosList from "../../photos-list/PhotosList";

import actions from "../../../redux/actions";

import "./SearchResultsPage.scss";

const SearchResultsPage = ({ results, searchPhotos, setTerm }) => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.searchTerm === undefined) {
      navigate("/");
      return;
    }

    if (results.length === 0) {
      setTerm(params.searchTerm);
      searchPhotos(params.searchTerm);
    }
  });

  return (
    <section className="search-results-page__section">
      <div className="container search-results-page__container">
        <div className="search-results-page__search-bar__wrapper">
          <SearchBar />
        </div>
        <div className="search-results-page__content">
          <h1 className="search-results-page__title">{params.searchTerm}</h1>
          <PhotosList />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  results: state.search.results,
});

const mapDispatchToProps = {
  searchPhotos: actions.searchPhotos,
  setTerm: actions.setSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
