import React from "react";
import logo from "../../assets/logo/LogoWhite.svg";
import "./Footer.css";
import { listNavbar } from "../../data/NavbarPopUpList";
import { Link } from "react-router-dom";

function Footer() {
  const firstSection = listNavbar.slice(0, 5);
  const secondSection = listNavbar.slice(5);

  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-left">
          <img className="footer-logo" src={logo} alt="logo" />
          <Link >Tentang Kami</Link>
        </div>
        <div className="footer-right">
          <div className="footer-navigator">
            {firstSection.map((item, index) => (
              <div key={index} className="slider-item">
                <button href={item.path} className="slider-link">
                  {item.nama}
                </button>
              </div>
            ))}
          </div>
          <div className="footer-navigator">
            {secondSection.map((item, index) => (
              <div key={index} className="slider-item">
                <button href={item.path} className="slider-link">
                  {item.nama}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="footer-copyright">
        © Jejak Budaya Nusantara 2023. All rights reserved
      </h1>
    </div>
  );
}

export default Footer;
