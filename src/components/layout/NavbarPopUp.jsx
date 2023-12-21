/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./NavbarPopUp.css";
import { Link } from "react-router-dom";

import ExploreButton from "../button/ExploreButton";

const NavbarPopUp = ({ isVisible, items, togglePopUp }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [firstSection, setFirstSection] = useState([]);
  const [secondSection, setSecondSection] = useState([]);
  const [thirdSection, setThirdSection] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 600) {
      setFirstSection(items.slice(0, 3));
      setSecondSection(items.slice(3, 6));
      setThirdSection(items.slice(6));
    } else {
      setFirstSection(items.slice(0, 5));
      setSecondSection(items.slice(5));
      setThirdSection([]);
    }
  }, [items, windowWidth]);

  return (
    <div className={`navbar-popup-container ${isVisible ? "show-popup" : ""}`}>
      <div className="navbar-popup-section">
        <div className="popup-section">
          {firstSection.map((item, index) => (
            <div key={index} className="slider-item">
              <Link
                to={item.path}
                className="slider-link"
              >
                {item.nama}
              </Link>
            </div>
          ))}
        </div>
        <div className="popup-section">
          {secondSection.map((item, index) => (
            <div key={index} className="slider-item">
              <Link
                to={item.path}
                className="slider-link"
              >
                {item.nama}
              </Link>
            </div>
          ))}
        </div>
        {thirdSection.length > 0 && (
          <div className="popup-section">
            {thirdSection.map((item, index) => (
              <div key={index} className="slider-item">
                <Link
                  to={item.path}
                  className="slider-link"
                >
                  {item.nama}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="button-explore-section-navbar" onClick={() => togglePopUp(false)}>
        <ExploreButton data={"EKSPLORASI"}/>
      </div>
    </div>
  );
};

export default NavbarPopUp;