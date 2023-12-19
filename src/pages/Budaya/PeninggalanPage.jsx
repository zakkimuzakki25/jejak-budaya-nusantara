import ContentCard from "../../components/cards/content/ContentCard";
import { listPeninggalan } from "../../data/peninggalan.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotPeninggalan.svg";

const LaguPage = () => {
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

export default LaguPage;
