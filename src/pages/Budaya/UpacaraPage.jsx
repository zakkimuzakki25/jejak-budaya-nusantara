import ContentCard from "../../components/cards/content/ContentCard";
import { listUpacara } from "../../data/upacara.jsx";

const UpacaraPage = () => {
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
          jenis="Makanan khas"
          nama={upacara.namaUpacara}
          daerah={upacara.daerah}
          foto={upacara.foto}
          deskripsi={upacara.deskripsi}
          sumber={upacara.sumber}
          key={index}
        />
      ))}
    </div>
  );
};

export default UpacaraPage;