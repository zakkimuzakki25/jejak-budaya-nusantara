import ContentCard from "../../components/cards/content/ContentCard";
import { listUpacara } from "../../data/upacara.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotUpacara.svg";

const UpacaraPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f1f5f9",
        paddingBottom: "30px",
      }}
    >
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
      <img
        className="home-maskot"
        src={maskot}
        alt="maskot"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
      />
    </div>
  );
};

export default UpacaraPage;
