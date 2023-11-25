import { Link } from "react-router-dom";
import home from "../../assets/icon/Home.svg";
import logo from "../../assets/logo/LogoYellow.svg";
import navigasi from "../../assets/icon/Navigasi.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container-navbar">
      <Link to="/">
        <img className="home-button" src={home} alt="home button" />
      </Link>
      <img src={logo} alt="logo" />
      <button>
        <img src={navigasi} alt="navigasi button" />
      </button>
    </div>
  );
}

export default Navbar;
