import React from "react";
import "./Gallery-Cafe.css";
import { gallery } from "../assets/Data";
import { BsPlusLg } from "react-icons/bs";

const GalleryCafe = () => {
  return (
    <div>
      <section className="gallery-cafe section" id="gallery">
        <h2 className="section__title-cafe" data-title="Gallery">
          Our Gallery
        </h2>
        <div className="gallery__grid-cafe container grid">
          {gallery.map(({ img, title }, index) => {
            return (
              <div className="gallery__item-cafe" key={index}>
                <img src={img} alt="" className="gallery__img-cafe" />
                <a href="/" className="gallery__icon-cafe">
                  <BsPlusLg />
                </a>

                <h3 className="gallery__title-cafe">{title} </h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GalleryCafe;
