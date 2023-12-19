import React from 'react';
import './NavbarPopUp.css';
import { useNavigate } from 'react-router-dom';

const NavbarPopUp = ({ isVisible, items, togglePopUp }) => {
  const nav = useNavigate();
  const firstSection = items.slice(0, 5);
  const secondSection = items.slice(5);

  const handleNavClick = (path) => {
    nav(path);
    togglePopUp(false)
  };

  return (
    <div className={`navbar-popup-container ${isVisible ? 'show-popup' : ''}`}>
      {/* Content of the popup menu */}
      <div className="popup-section">
        {firstSection.map((item, index) => (
          <div key={index} className="slider-item">
            <button onClick={() => handleNavClick(item.path)} className="slider-link">
              {item.nama}
            </button>
          </div>
        ))}
      </div>
      <div className="popup-section">
        {secondSection.map((item, index) => (
          <div key={index} className="slider-item">
            <button onClick={() => handleNavClick(item.path)} className="slider-link">
              {item.nama}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarPopUp;
