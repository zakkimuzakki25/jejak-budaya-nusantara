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
      <div className="homeslider">
        {data.map((item, idx) => {
          return (
            <>
              <div className={slide === idx ? "slide" : "slide slide-hidden"}>
                <div
                  style={{
                    position: "absolute",
                    width: "600px",
                    height: "400px",
                    backgroundImage:
                      "linear-gradient(to top, black, transparent)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      padding: "15px 20px",
                      position: "absolute",
                      textAlign: "justify",
                      bottom: "0px",
                      color: "white",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "regular",
                    }}
                  >
                    {item.deskripsi}
                  </div>
                </div>
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  style={{
                    width: "600px",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
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
