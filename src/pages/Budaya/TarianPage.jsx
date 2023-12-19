import ContentCard from "../../components/cards/content/ContentCard";
import { listTarian } from "../../data/tarian.jsx";
import { useEffect } from "react";

const TarianPage = () => {
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
      {listTarian.map((tarian, index) => (
        <ContentCard
          jenis="Tarian adat"
          nama={tarian.namaTarian}
          daerah={tarian.daerah}
          foto={tarian.foto}
          deskripsi={tarian.deskripsi}
          sumber={tarian.sumber}
          key={index}
        />
      ))}
    </div>
  );
};

export default TarianPage;
