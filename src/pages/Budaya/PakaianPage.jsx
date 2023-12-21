import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listPakaian } from "../../data/pakaian.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotMainSmile.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";
import ChatTalkBudaya from "../../components/bubbleChat/ChatTalkBudaya.jsx";

const PakaianPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="judul-budaya">
          Daftar Pakaian Adat Daerah di Indonesia
        </h1>
        <div className="budaya-container">
          {listPakaian.map((pakaian, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={pakaian.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listPakaian.map((pakaian, index) => (
            <ContentCard
              jenis="Pakaian adat"
              nama={pakaian.namaPakaian}
              daerah={pakaian.daerah}
              foto={pakaian.foto}
              deskripsi={pakaian.deskripsi}
              sumber={pakaian.sumber}
              key={index}
            />
          ))}
          <ChatTalkBudaya maskot={maskot}/>
        </div>
        <UpButton posisi={"left"} />
      </div>
      <Footer />
    </>
  );
};

export default PakaianPage;
