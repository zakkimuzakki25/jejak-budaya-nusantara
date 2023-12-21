import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listMakanan } from "../../data/makanan.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotFoodie.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "./budaya.css";
import ChatTalkBudaya from "../../components/bubbleChat/ChatTalkBudaya.jsx";

const MakananPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="judul-budaya">
          Daftar Makanan Khas Daerah di Indonesia
        </h1>
        <div className="budaya-container">
          {listMakanan.map((makanan, index) => (
            <>
              {index != 0 && <div className="row-navigator-budaya"></div>}
              <NavBudaya daerah={makanan.daerah} key={index} />
            </>
          ))}
        </div>
        <div className="budaya-card-container">
          {listMakanan.map((makanan, index) => (
            <ContentCard
              jenis="Makanan khas"
              nama={makanan.namaMakanan}
              daerah={makanan.daerah}
              foto={makanan.foto}
              deskripsi={makanan.deskripsi}
              sumber={makanan.sumber}
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

export default MakananPage;
