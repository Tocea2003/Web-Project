import React from "react";
import "../styles/home-main.css";
import { Link } from "react-router-dom";
const HomeMain = () => {
  return (
    <div className="home-main">
      <h1 className="home-title section__title-cafe">
        Welcome to Smart Camps Sibiu
      </h1>

      <Link to="/auth" className="home-link">
        Reserve now
      </Link>
    </div>
  );
};

export default HomeMain;
