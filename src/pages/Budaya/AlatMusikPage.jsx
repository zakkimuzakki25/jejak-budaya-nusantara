import ContentCard from "../../components/cards/content/ContentCard";
import { listAlatMusik } from "../../data/alat-musik.jsx";
import maskot from "/src/assets/maskots/MaskotAlatMusik.svg";
import { useEffect } from "react";

const AlatMusikPage = () => {
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

export default AlatMusikPage;
