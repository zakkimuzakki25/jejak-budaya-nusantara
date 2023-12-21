import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listAlatMusik } from "../../data/alat-musik.jsx";
import maskot from "/src/assets/maskots/MaskotAlatMusik.svg";
import { useEffect } from "react";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";

const AlatMusikPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="judul-budaya">
          Daftar Alat Musik Khas Daerah di Indonesia
        </h1>
        <div className="budaya-container">
          {listAlatMusik.map((alatMusik, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={alatMusik.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listAlatMusik.map((alatMusik, index) => (
            <ContentCard
              jenis="Alat Musik khas"
              nama={alatMusik.namaAlatMusik}
              daerah={alatMusik.daerah}
              foto={alatMusik.foto}
              deskripsi={alatMusik.deskripsi}
              sumber={alatMusik.sumber}
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

export default AlatMusikPage;
