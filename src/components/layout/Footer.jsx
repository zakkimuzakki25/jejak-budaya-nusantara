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
        </div>

        <div className="footer-middle">
          <h3 >JBN</h3>
          <Link to={"/tentang-kami"}>Tentang Kami</Link>
          <Link >Hubungi Kami</Link>
          <Link >Media Sosial</Link>
        </div>

        <div className="footer-right">
          <h3 >Eksplorasi Budaya</h3>
          <div className="footer-navigator">
            {firstSection.map((item, index) => (
              <div key={index} className="slider-item">
                <Link to={item.path} className="slider-link">
                  {item.nama}
                </Link>
              </div>
            ))}
          </div>
          <div className="footer-navigator">
            {secondSection.map((item, index) => (
              <div key={index} className="slider-item">
                <Link to={item.path} className="slider-link">
                  {item.nama}
                </Link>
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
