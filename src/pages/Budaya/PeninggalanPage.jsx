import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listPeninggalan } from "../../data/peninggalan.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotPeninggalan.svg";
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
        <h1 className="judul-budaya">Daftar Peninggalan Daerah di Indonesia</h1>
        <div className="budaya-container">
          {listPeninggalan.map((peninggalan, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={peninggalan.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listPeninggalan.map((peninggalan, index) => (
            <ContentCard
              jenis="Peninggalan"
              nama={peninggalan.namaPeninggalan}
              daerah={peninggalan.daerah}
              foto={peninggalan.foto}
              deskripsi={peninggalan.deskripsi}
              sumber={peninggalan.sumber}
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
