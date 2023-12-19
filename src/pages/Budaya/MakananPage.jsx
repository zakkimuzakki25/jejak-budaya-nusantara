import ContentCard from "../../components/cards/content/ContentCard";
import { listMakanan } from "../../data/makanan.jsx";

const MakananPage = () => {
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
    </div>
  );
};

export default MakananPage;
