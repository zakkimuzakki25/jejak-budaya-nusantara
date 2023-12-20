import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listUpacara } from "../../data/upacara.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotUpacara.svg";

const UpacaraPage = () => {
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
      }}>Daftar Upacara Adat Daerah di Indonesia</h1>
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
      {listUpacara.map((rumah, index) => (
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
      {listUpacara.map((upacara, index) => (
        <ContentCard
          jenis="Upacara adat"
          nama={upacara.namaUpacara}
          daerah={upacara.daerah}
          foto={upacara.foto}
          deskripsi={upacara.deskripsi}
          sumber={upacara.sumber}
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

export default UpacaraPage;
