import React, {useState} from "react";

import "./HomeSlider.css";

const HomeSlider = ({ data }) => {
  const[slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length-1 ? 0: slide+1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length-1 : slide-1);
  }

  return (
    <div className="homeslider">
      {data.map((item, idx) => {
        return (
          <img  src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
        );
      })}
      <button className="prev-btn" onClick={prevSlide} >
        &lt;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default HomeSlider;
