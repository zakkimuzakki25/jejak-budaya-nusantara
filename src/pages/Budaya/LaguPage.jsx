import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listLagu } from "../../data/lagu.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotMusician.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";
import ChatTalkBudaya from "../../components/bubbleChat/ChatTalkBudaya.jsx";

const LaguPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="navbar-parent">
      <Navbar />
      <div>
        <h1 className="judul-budaya">Daftar Lagu Khas Daerah di Indonesia</h1>
        <div className="budaya-container">
          {listLagu.map((lagu, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={lagu.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listLagu.map((lagu, index) => (
            <ContentCard
              jenis="Lagu khas"
              nama={lagu.namaLagu}
              daerah={lagu.daerah}
              foto={lagu.foto}
              deskripsi={lagu.deskripsi}
              sumber={lagu.sumber}
              key={index}
            />
          ))}
          <ChatTalkBudaya maskot={maskot}/>
        </div>
        <UpButton posisi={"left"} />
      </div>
      <Footer />
    </div>
  );
};

export default LaguPage;
