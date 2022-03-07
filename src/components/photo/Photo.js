import React from "react";

import "./Photo.scss";

const Photo = ({ photo, description, id }) => {
  return (
    <div className="photo__wrapper">
      <img src={photo} alt={description} className="photo" id={id} />
    </div>
  );
};

export default Photo;
