import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listSenjata } from "../../data/senjata.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotSenjata.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";

const SenjataPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="judul-budaya">
          Daftar Senjata Khas Daerah di Indonesia
        </h1>
        <div className="budaya-container">
          {listSenjata.map((senjata, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={senjata.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listSenjata.map((senjata, index) => (
            <ContentCard
              jenis="Senjata khas"
              nama={senjata.namaSenjata}
              daerah={senjata.daerah}
              foto={senjata.foto}
              deskripsi={senjata.deskripsi}
              sumber={senjata.sumber}
              key={index}
            />
          ))}
          <img className="maskot-budaya" src={maskot} alt="maskot" />
        </div>
        <UpButton posisi={"left"} />
      </div>
      <Footer />
    </>
  );
};

export default SenjataPage;
