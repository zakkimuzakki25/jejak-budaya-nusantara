import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listUpacara } from "../../data/upacara.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotUpacara.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";
import ChatTalkBudaya from "../../components/bubbleChat/ChatTalkBudaya.jsx";

const UpacaraPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="navbar-parent">
      <Navbar />
      <div>
        <h1 className="judul-budaya">
          Daftar Upacara Adat Daerah di Indonesia
        </h1>
        <div className="budaya-container">
          {listUpacara.map((upacara, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={upacara.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listUpacara.map((upacara, index) => (
            <ContentCard
              jenis="Upacara adat"
              nama={upacara.namaUpacara}
              daerah={upacara.daerah}
              foto={upacara.foto}
              deskripsi={upacara.deskripsi}
              sumber={upacara.sumber}
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

export default UpacaraPage;
