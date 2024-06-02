import React from "react";
import "../styles/Home-Cafe.css";
const HomeCafe = () => {
  return (
    <>
      <section className="home-cafe" id="home-cafe">
        <div className="home__container-cafe container ">
          <div className="home__content-cafe">
            <span className="home__subtitle-cafe">Welcome To Caffero!</span>
            <h1 className="home__title-cafe">
              Discover Amazing Coffee House & Bakery
            </h1>
            <p className="home__description-cafe">
              There are many variations of passages available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words .{" "}
            </p>

            <div className="home__btns-cafe">
              <a href="#menu" className="btn-cafe">
                Check Menu
              </a>
              <a href="#reservation" className="btn-cafe home__btn-cafe">
                Book A Table
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCafe;
