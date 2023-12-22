import FaktaCard from "../../components/cards/content/FaktaCard";
import { faktaMenarik } from "../../data/faktaMenarik.jsx";
import { useEffect } from "react";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";

const FaktaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="navbar-parent">
      <Navbar />
      <div>
        <h1 className="judul-budaya">Daftar Fakta Menarik Budaya Indonesia</h1>
        <div className="budaya-card-container">
          {faktaMenarik.map((faktamenarik, index) => (
            <FaktaCard
              jenis={faktamenarik.judul}
              nama={faktamenarik.namafaktamenarik}
              daerah={faktamenarik.daerah}
              foto={faktamenarik.src}
              deskripsi={faktamenarik.deskripsi}
              sumber={faktamenarik.sumber}
              key={index}
            />
          ))}
        </div>
        <UpButton posisi={"right"} />
      </div>
      <Footer />
    </div>
  );
};

export default FaktaPage;
