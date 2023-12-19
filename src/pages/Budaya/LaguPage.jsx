import ContentCard from "../../components/cards/content/ContentCard";
import { listLagu } from "../../data/lagu.jsx";

const LaguPage = () => {
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
      {listLagu.map((lagu, index) => (
        <ContentCard
          jenis="Lagu khas"
          nama={lagu.namaLagu}
          daerah={lagu.daerah}
          foto={lagu.foto}
          deskripsi={lagu.deskripsi}
          sumber={lagu.sumber}
          key={index}
        />
      ))}
    </div>
  );
};

export default LaguPage;
