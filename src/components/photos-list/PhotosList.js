import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Photo from "../photo/Photo";
import Modal from "../modal/Modal";

import actions from "../../redux/actions";

import "./PhotosList.scss";

const PhotosList = ({ term, page, results, error, onScrollFetch }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (activePhoto) {
      document.body.classList.toggle("overflow-hidden");
      setIsModalActive(true);
    }
  }, [activePhoto]);

  const handleLoadMoreClick = () => {
    if (page + 1 === 5) {
      return;
    }

    onScrollFetch(term, page + 1);
  };

  const handleClick = (e) => {
    if (!e.target.classList.contains("photo")) {
      return;
    }

    setActivePhoto(e.target.id);
  };

  const handleDismiss = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsModalActive(false);
    setActivePhoto(null);
  };

  const renderedPhotos = results.map((photo, index) => {
    const { id, urls, description } = photo;
    return (
      <Photo key={id} photo={urls.small} description={description} id={index} />
    );
  });

  return (
    <>
      <div onClick={handleClick} className="photos-list">
        {renderedPhotos}
      </div>
      {page + 1 < 5 ? (
        <h5 onClick={handleLoadMoreClick} className="photos-list__load-more">
          load more
        </h5>
      ) : error ? (
        <div className="photos-list__error">oops! something went wrong...</div>
      ) : null}
      {isModalActive ? (
        <Modal onDismiss={handleDismiss} photo={results[activePhoto]} />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  results: state.search.results,
  term: state.search.term,
  page: state.search.photosPage,
  error: state.search.onScrollFetchingError,
});

const mapDispatchToProps = {
  onScrollFetch: actions.scrollPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
