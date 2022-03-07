import React from "react";

import SearchBar from "../../search-bar/SearchBar";

import bgImage from "../../../images/front-page-bg.jpg";

import "./FrontPage.scss";

const FrontPage = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="front-page__section"
    >
      <div className="container front-page__container">
        <div className="front-page__content">
          <h1 className="front-page__title">Unsplash Mockup</h1>
          <h5 className="front-page__subtitle">
            The internet’s source of freely-usable images.
          </h5>
          <h5 className="front-page__subtitle">
            Not Really Powered by Anyone or Anything.
          </h5>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
