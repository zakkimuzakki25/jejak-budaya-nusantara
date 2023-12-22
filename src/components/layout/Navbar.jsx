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
  // const [lastScrollY, setLastScrollY] = useState(window.scrollY);
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

    // useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     setLastScrollY(window.scrollY);
    //   });
    // }, [window.scrollY]);

    // useEffect(() => {
    //   console.log("last = "+lastScrollY);
    //   console.log("now = "+window.scrollY);
    // }, [window.scrollY]);

    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const handleScroll = () => {
        const navbar = document.querySelector(".navbar-container");
        if (window.scrollY > navbar.offsetHeight && lastScrollY < window.scrollY) {
          navbar.classList.add("nav-hidden");
        } else {
          navbar.classList.remove("nav-hidden");
        }
  
        lastScrollY = window.scrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div className={`navbar-container`}>
        <Link to="/">
          <img className="navbar-home-button" src={home} alt="home button" />
        </Link>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-jbn"/>
        </Link>
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
