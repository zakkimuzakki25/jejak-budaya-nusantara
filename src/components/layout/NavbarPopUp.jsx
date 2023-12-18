import React from 'react';
import "./NavbarPopUp.css";

const NavbarPopUp = ({ isVisible, items }) => {
  const firstSection = items.slice(0, 5);
  const secondSection = items.slice(5);

  return (
    <div className={`navbar-popup-container ${isVisible ? 'show-popup' : ''}`}>
      {/* Content of the popup menu */}
      <div className="popup-section">
        {firstSection.map((item, index) => (
          <div key={index} className="slider-item">
            <button href={item.path} className="slider-link">
              {item.nama}
            </button>
          </div>
        ))}
      </div>
      <div className="popup-section">
        {secondSection.map((item, index) => (
          <div key={index} className="slider-item">
            <button href={item.path} className="slider-link">
              {item.nama}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavbarPopUp;
