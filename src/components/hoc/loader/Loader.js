import React from "react";

import "./Loader.scss";

const Loader =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <section className="loader__section">
        <div className="loader__wrapper">
          <div>
            <div className="position-relative loader"></div>
          </div>
        </div>
      </section>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default Loader;
