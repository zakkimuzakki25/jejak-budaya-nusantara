import React, { useState } from "react";

import "./HomeSlider.css";

const HomeSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="container">
      <div className="container-button">
        <button className="prev-btn" onClick={prevSlide}>
          &lt;
        </button>
      </div>
      <div className="homeslider">
        {data.map((item, idx) => {
          return (
            <>
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
                style={{
                  width: "100%",
                }}
              />
              <div style={{
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  zIndex : "1",
                  height: "100%",
                  width: "100%",
                  backgroundImage: "linear-gradient(to top, black, transparent 30%)",
                }}></div>
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  color:"white",
                  zIndex : "2",
                }}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              >
                {item.deskripsi}
              </div>
            </>
          );
        })}
      </div>
      <div className="container-button">
        <button className="next-btn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
