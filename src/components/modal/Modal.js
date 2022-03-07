import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const Modal = ({ photo, onDismiss }) => {
  const { description, created_at, user, urls } = photo;

  const renderedDate = (created_at) => {
    const date = new Date(created_at);

    return `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
  };

  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="modal__wrapper">
      <div onClick={(e) => e.stopPropagation()} className="modal__container">
        <div className="modal__image__author">
          <span className="modal__image__author__avatar">
            <img src={user.profile_image.small} alt="author avatar" />
          </span>
          <span className="modal__image__author__name">{user.first_name}</span>
        </div>
        <div className="modal__image">
          <img src={urls.regular} alt={description} />
        </div>
        <div className="modal__content">
          <span className="modal__content__location">{user.location}</span>
          <span className="modal__content__created-at">
            {renderedDate(created_at)}
          </span>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
