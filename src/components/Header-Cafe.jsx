import React from "react";
import logo from "/src/Cafenea/assets/images/logo.png";
import "./Header-Cafe.css";
import { links } from "src/data/Data.jsx";
import { FaStream } from "react-icons/fa";

const HeaderCafe = () => {
  return (
    <header className="header-cafe">
      <nav className="nav container">
        <a href="/cafenea" className="nav__logo-cafe">
          <img src={logo} className="nav__logo-img-cafe"></img>
        </a>

        <div className="nav__menu-logo">
          <ul className="nav__list-cafe">
            {links.map(({ name, path }, index) => (
              <li className="nav__item-cafe" key={index}>
                <a href={path} className="nav__link-cafe">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__toggle-cafe">
          <FaStream className="nav__icon-cafe"></FaStream>
        </div>
      </nav>
    </header>
  );
};

export default HeaderCafe;
//21 min
