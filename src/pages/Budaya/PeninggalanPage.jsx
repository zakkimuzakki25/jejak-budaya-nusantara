import ContentCard from "../../components/cards/content/ContentCard";
import { listPeninggalan } from "../../data/peninggalan.jsx";

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
    </div>
  );
};

export default LaguPage;
