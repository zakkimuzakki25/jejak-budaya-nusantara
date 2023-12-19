import React from "react";
import "./NavbarPopUp.css";
import { useNavigate } from "react-router-dom";

import ExploreButton from "../button/ExploreButton";

const NavbarPopUp = ({ isVisible, items, togglePopUp }) => {
  const nav = useNavigate();
  const firstSection = items.slice(0, 5);
  const secondSection = items.slice(5);

  const handleNavClick = (path) => {
    nav(path);
    togglePopUp(false);
  };

  return (
    <div className={`navbar-popup-container ${isVisible ? "show-popup" : ""}`}>
      <div className="navbar-popup-section">
        <div className="popup-section">
          {firstSection.map((item, index) => (
            <div key={index} className="slider-item">
              <button
                onClick={() => handleNavClick(item.path)}
                className="slider-link"
              >
                {item.nama}
              </button>
            </div>
          ))}
        </div>
        <div className="popup-section">
          {secondSection.map((item, index) => (
            <div key={index} className="slider-item">
              <button
                onClick={() => handleNavClick(item.path)}
                className="slider-link"
              >
                {item.nama}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="button-explore-section-navbar">
        <ExploreButton />
      </div>
    </div>
  );
};

export default NavbarPopUp;
