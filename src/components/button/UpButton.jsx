import React from 'react';
import './UpButton.css';
import ButtonUp from '../../assets/main-button/ButtonUp.svg';
import BatikAwanv2 from '../../assets/support/BatikAwan-v2.svg';
import BatikAwan from '../../assets/support/BatikAwan.svg';


const UpButton = ({posisi}) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${posisi == 'left' ? "up-button-container-left" : "up-button-container-right"}`}>
      <button className="up-button" onClick={handleScrollToTop}>
        <img className="up-button-img" src={ButtonUp} alt="Scroll to Top" />
        <img className="up-button-BatikAwanv2" src={BatikAwanv2} alt="Scroll to Top" />
        <img className="up-button-BatikAwan-rigth" src={BatikAwan} alt="Scroll to Top" />
        <img className="up-button-BatikAwan-left" src={BatikAwan} alt="Scroll to Top" />
      </button>
    </div>
  );
};

export default UpButton;
