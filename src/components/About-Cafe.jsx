import React from "react";
import aboutimg from "../assets/about-img.jpg";
import "../styles/About-Cafe.css";
import { FiCheck } from "react-icons/fi";

const AboutCafe = () => {
  return (
    <>
      <section className="about-cafe section" id="about">
        <div className="about__grid-cafe container grid">
          <div className="about__img-wrapper-cafe">
            <img src={aboutimg} alt="about" />
          </div>
          <div className="about-content-cafe">
            <h2
              className="section__title-cafe title-left"
              data-title="About Us"
            >
              Fresh Quality And Organic Tasty Coffee House For You
            </h2>

            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
              sapiente! Praesentium laboriosam quas dolores a, officia
              aspernatur vel sit atque fuga aliquam est ducimus, tempora
              corrupti labore? Quaerat, recusandae similique?
            </p>
            <div className="about__details-cafe grid">
              <p className="about__details-description-cafe">
                <FiCheck className="about__details-icon-cafe" />
                At vero eos et accusamus et iusto odio{" "}
              </p>
              <p className="about__details-description-cafe">
                <FiCheck className="about__details-icon-cafe" />
                Established fact that a reader will be distracted
              </p>
              <p className="about__details-description-cafe">
                <FiCheck className="about__details-icon-cafe" />
                Sed ut perspiciatis unde omnis iste natus error sit
              </p>
            </div>
            <a href="#team" className="btn-cafe">
              Our Experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCafe;
