  import { useState, useEffect, useRef } from "react";
  import { Link } from "react-router-dom";
  import home from "../../assets/icon/Home.svg";
  import logo from "../../assets/logo/LogoYellow.svg";
  import navigasi from "../../assets/icon/Navigasi.svg";
  import NavbarPopUp from "./NavbarPopUp";
  import { listNavbar } from "../../data/NavbarPopUpList";
  import "./Navbar.css";

  function Navbar() {
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const buttonRef = useRef(null);

    const togglePopUp = () => {
      setPopUpVisible(!isPopUpVisible);
    };

    const handleOutsideClick = (event) => {
      if (
        isPopUpVisible &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        !event.target.closest(".navbar-popup-container")
      ) {
        setPopUpVisible(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [isPopUpVisible]);

    return (
      <div className="navbar-container">
        <Link to="/">
          <img className="navbar-home-button" src={home} alt="home button" />
        </Link>
        <img src={logo} alt="logo" />
        <button ref={buttonRef} onClick={togglePopUp}>
          <img src={navigasi} alt="navigasi button" />
        </button>
        
        {isPopUpVisible && (
          <NavbarPopUp isVisible={isPopUpVisible} items={listNavbar} togglePopUp={togglePopUp}/>
        )}
      </div>
    );
  }

  export default Navbar;
