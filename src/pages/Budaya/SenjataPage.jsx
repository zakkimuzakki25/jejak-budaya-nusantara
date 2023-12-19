import ContentCard from "../../components/cards/content/ContentCard";
import { listSenjata } from "../../data/senjata.jsx";
import { useEffect } from "react";

const SenjataPage = () => {
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
      {listSenjata.map((senjata, index) => (
        <ContentCard
          jenis="Senjata khas"
          nama={senjata.namaSenjata}
          daerah={senjata.daerah}
          foto={senjata.foto}
          deskripsi={senjata.deskripsi}
          sumber={senjata.sumber}
          key={index}
        />
      ))}
    </div>
  );
};

export default SenjataPage;
