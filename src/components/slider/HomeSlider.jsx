import { useState } from "react";

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
      <div>
        {data.map((item, idx) => {
          return (
            <>
              <div className={slide === idx ? "slide" : "slide slide-hidden"}>
                <div className="slide-container">
                  <div className="slide-text">{item.deskripsi}</div>
                </div>
                <img className="slide-img" src={item.src} key={idx} />
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
