import React from "react";
import { features } from "../data/Data";
import shape from "../assets/shape.png";
import "../styles/Features-Cafe.css";

const FeaturesCafe = () => {
  return (
    <>
      <section className="features-cafe section" id="features">
        <h2 className="section__title-cafe" data-title="Features">
          Our Best Features
        </h2>

        <div className="features__grid-cafe container grid">
          {features.map(({ img, title, description }, index) => {
            return (
              <div className="feature__item-cafe" key={index}>
                <img src={img} alt="" className="features__img-cafe" />
                <h3 className="feature__title-cafe">{title}</h3>
                <p className="feature__description-cafe">{description}</p>
                <img src={shape} alt="" className="feature__shape" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturesCafe;
