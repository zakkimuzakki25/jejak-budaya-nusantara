import ContentCard from "../../components/cards/content/ContentCard";
import { listSenjata } from "../../data/senjata.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotSenjata.svg";

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

export default SenjataPage;
