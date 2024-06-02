import React from "react";
import { FaFacebook, FaInstagram, FaMap } from "react-icons/fa"; // Added missing import for FaFacebook and FaInstagram
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Smart Camps </h2>

      <p>
        Email:
        <a href="mailto:inscrieri.smartcamps@gmail.com" className="email">
          inscrieri.smartcamps@gmail.com
        </a>
      </p>
      <p>
        Phone:
        <a href="tel:0740395422" className="phone">
          0740 395 422
        </a>
      </p>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100077758720707&locale=ro_RO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} className="icon-footer" />
        </a>
        <a
          href="https://www.instagram.com/explore/locations/108933348366205/smart-camps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="icon-footer" />
        </a>
        <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/nr.+244+Hasag/@45.977654,24.0776861,16z/data=!3m1!4b1?entry=ttu",
              "_blank"
            )
          }
        >
          <FaMap size={24} className="icon-footer" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
