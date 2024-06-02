import React from "react";
import "./Menu-Cafe.css";
import { menu } from "../data/Data";
const MenuCafe = () => {
  return (
    <>
      <section className="menu__section-cafe section" id="menu">
        <h2 className="section__title-cafe" data-title="Our Menu">
          Let's see what we have for you!
        </h2>

        <div className="menu__grid-cafe container grid">
          {menu.map(({ img, title, description, price }, index) => (
            <div className="menu__item-cafe grid" key={index}>
              <div className="menu__img-wrapper-cafe">
                <img src={img} alt={title} className="menu__img-cafe" />
              </div>

              <div className="menu__data-cafe">
                <div>
                  <h3 className="menu__title-cafe">{title}</h3>
                  <p className="menu__description-cafe">{description}</p>
                </div>
                <span className="menu__price-cafe">${price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuCafe;
