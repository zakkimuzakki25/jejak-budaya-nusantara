import ContentCard from "../../components/cards/content/ContentCard";
import { listRumahAdat } from "../../data/rumah.jsx";
import { useEffect } from "react";

const RumahPage = () => {
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
      {listRumahAdat.map((rumah, index) => (
        <ContentCard
          jenis="Rumah adat"
          nama={rumah.namaRumahAdat}
          daerah={rumah.daerah}
          foto={rumah.foto}
          deskripsi={rumah.deskripsi}
          sumber={rumah.sumber}
          key={index}
        />
      ))}
    </div>
  );
};

export default RumahPage;
