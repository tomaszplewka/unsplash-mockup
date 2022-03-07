import React from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import LogoImage from "../../images/logo.png";

import actions from "../../redux/actions";

import "./Logo.scss";

const Logo = ({ setTerm }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setTerm("");
  };

  return (
    <div className="logo__wrapper">
      <img
        onClick={handleLogoClick}
        src={LogoImage}
        alt="logo"
        className="logo"
      />
    </div>
  );
};

const mapDispatchToProps = {
  setTerm: actions.setSearchTerm,
};

export default connect(null, mapDispatchToProps)(Logo);
