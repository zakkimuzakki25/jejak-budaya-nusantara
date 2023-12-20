import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listMakanan } from "../../data/makanan.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotFoodie.svg";
import UpButton from "../../components/button/UpButton";

const MakananPage = () => {
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
      }}>Daftar Makanan Khas Daerah di Indonesia</h1>
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
      {listMakanan.map((makanan, index) => (
        <>
          {index != 0 && (
            <div style={{
              width: "2px",
              height: "25px",
              borderRadius: "50vh",
              backgroundColor: "var(--accent-color-secondary-600)",
              color: "white",
            }}></div>
          )}
          <NavBudaya daerah={makanan.daerah} key={index} />
        </>
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
        src={maskot}
        alt="maskot"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
      />
    </div>
    <UpButton posisi={"left"}/>
    </div>
  );
};

export default MakananPage;
