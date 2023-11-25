import logo from "../../assets/logo/LogoWhite.svg";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={logo} alt="logo" />
      <h1 className="footer-copyright"> © Jejak Budaya Nusantara 2023. All rights reserved </h1>
    </div>
  )
}

export default Footer