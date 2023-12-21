import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listRumahAdat } from "../../data/rumah.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotRumah.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";

const RumahPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="judul-budaya">Daftar Rumah Adat Daerah di Indonesia</h1>
        <div className="budaya-container">
          {listRumahAdat.map((rumah, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={rumah.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listRumahAdat.map((rumah, index) => (
            <ContentCard
              jenis="Rumah adat"
              nama={rumah.namaRumahAdat}
              daerah={rumah.daerah}
              foto={rumah.foto}
              deskripsi={rumah.deskripsi}
              sumber={rumah.sumber}
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

export default RumahPage;
