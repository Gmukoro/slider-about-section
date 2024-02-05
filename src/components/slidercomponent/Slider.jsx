import React, { useState } from "react";
import "./Slider.css";
import Nextimg from "../../assets/next-img.png";
import Previousimg from "../../assets/previous-img.png";
import Yellowstar from "../../assets/yello-star.png";

const Slider = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = images.length;

  const nextSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const { imageUrl, name, description } = images[currentPage];

  return (
    <div className="slider__motherb">
      <div className="app__slider">
        <div className="slider">
          <div className="btn">
            <button onClick={prevSlide} className="btn__special">
              <img src={Previousimg} alt="Previous" className="left__btn" />
            </button>
            <button onClick={nextSlide}>
              <img src={Nextimg} alt="Next" />
            </button>
          </div>
          <div className="image-container">
            <div className="image__img">
              <div>
                <span className="dotted__design1 right" />
                <span className="dotted__design1 right" />
                <span className="dotted__design1 right" />
              </div>
              <img src={imageUrl} alt={name} className="img1" />
              <div className="dotted__design right">
                <span className="dotted__design left" />
                <span className="dotted__design left" />
                <span className="dotted__design left" />
              </div>
            </div>
            <div className="image-details">
              <h4>Testimonial</h4>
              <h2>
                Reviews From Our Happy Clients<span></span>
              </h2>
              <p>{description}</p>
              <div className="name__div">
                <h2>{name}</h2>
                <div className="name__starimg">
                  <img src={Yellowstar} alt="yellowstar" />
                  <img src={Yellowstar} alt="yellowstar" />
                  <img src={Yellowstar} alt="yellowstar" />
                  <img src={Yellowstar} alt="yellowstar" />
                  <img src={Yellowstar} alt="yellowstar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
