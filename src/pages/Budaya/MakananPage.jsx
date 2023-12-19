import ContentCard from "../../components/cards/content/ContentCard";
import { listMakanan } from "../../data/makanan.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotFoodie.svg";

const MakananPage = () => {
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

export default MakananPage;
