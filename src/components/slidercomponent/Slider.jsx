import React, { useState } from "react";
import "./Slider.css";

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
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </div>
          <div className="image-container">
            <div className="image__img">
              <div>
                <span className="dotted__design left" />
                <span className="dotted__design left" />
                <span className="dotted__design left" />
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
              <h1>
                Reviews From Our Happy Clients<span></span>
              </h1>
              <p>{description}</p>
              <h2>{name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
