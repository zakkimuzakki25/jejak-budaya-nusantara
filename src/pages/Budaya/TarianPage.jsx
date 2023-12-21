import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listTarian } from "../../data/tarian.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotTari.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";

const TarianPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="judul-budaya">Daftar Tarian Adat Daerah di Indonesia</h1>
        <div className="budaya-container">
          {listTarian.map((tarian, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={tarian.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listTarian.map((tarian, index) => (
            <ContentCard
              jenis="Tarian adat"
              nama={tarian.namaTarian}
              daerah={tarian.daerah}
              foto={tarian.foto}
              deskripsi={tarian.deskripsi}
              sumber={tarian.sumber}
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

export default TarianPage;
