import React, { useEffect, useRef } from "react";
import BatikAwan from "../../assets/support/BatikAwan.svg";
import "./HomeAwan.css";

const HomeAwan = () => {
  return (
    <div className="batik-awan">
      <img src={BatikAwan} alt="batik-atas" className="batik-awan-kiriatas" />
      <img src={BatikAwan} alt="batik-atas" className="batik-awan-kananatas" />
      <img
        src={BatikAwan}
        alt="batik-bawah"
        className="batik-awan-kiribawah-atas"
      />
      <img
        src={BatikAwan}
        alt="batik-bawah"
        className="batik-awan-kiribawah-bawah"
      />
      <img
        src={BatikAwan}
        alt="batik-bawah"
        className="batik-awan-kananbawah-atas"
      />
      <img
        src={BatikAwan}
        alt="batik-bawah"
        className="batik-awan-kananbawah-bawah"
      />
    </div>
  );
};

export default HomeAwan;
