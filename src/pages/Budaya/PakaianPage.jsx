import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listPakaian } from "../../data/pakaian.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotMainSmile.svg";

const PakaianPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 style={{
        display: "flex",
        margin: "0px",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--header-bg-color)",
        color: "white",
        fontFamily: "Finger Paint",
        fontSize: "22px",
        fontWeight: "200"
      }}>Daftar Pakaian Adat Daerah di Indonesia</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "0px",
        height: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "var(--header-bg-color)",
      }}>
      {listPakaian.map((rumah, index) => (
        <NavBudaya daerah={rumah.daerah} key={index} />
      ))}
      </div>
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
      <img
        src={maskot}
        alt="maskot"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
      />
    </div>
    </div>
  );
};

export default PakaianPage;
