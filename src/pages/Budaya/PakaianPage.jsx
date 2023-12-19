import ContentCard from "../../components/cards/content/ContentCard";
import { listPakaian } from "../../data/pakaian.jsx";
import { useEffect } from "react";

const PakaianPage = () => {
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
    </div>
  );
};

export default PakaianPage;
