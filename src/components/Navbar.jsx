import React, { Component } from "react";
import "../styles/NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItemes } from "./MenuItemes";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <img
            className="logo-nav"
            src="src/assets/Logo-removebg-preview.png"
            alt="Logo"
          />
        </Link>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItemes.map((item, index) => {
            return (
              <li key={index} className="menu-items">
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
