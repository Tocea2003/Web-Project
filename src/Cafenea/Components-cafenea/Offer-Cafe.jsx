import React from "react";
import "./Offer-Cafe.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { offer } from "../assets/Data";

const OfferCafe = () => {
  return (
    <section className="offer__section-cafe section" id="offer">
      <h2 className="section__title-cafe" data-title="Offer">
        Special Offer for you
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container"
      >
        {offer.map(({ img, title, discount, description }, index) => (
          <SwiperSlide key={index} className="offer__item-cafe">
            <div className="offer__img-wrapper-cafe">
              <img src={img} alt={title} className="offer__img-cafe" />
            </div>
            <div className="offer__content-cafe" id="content-cafe">
              <h3 className="offer__title-cafe">{title}</h3>
              <span className="offer__discount-cafe">{discount}</span>
              <p className="offer__description-cafe">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OfferCafe;
