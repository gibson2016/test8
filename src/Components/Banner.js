import React from "react";
import "../sass/banner.sass";

const Banner = () => {
  return (
    <div className="banner">
      <span className="banner__text">{process.env.REACT_APP_ENV}</span>
    </div>
  );
};

export default Banner;
