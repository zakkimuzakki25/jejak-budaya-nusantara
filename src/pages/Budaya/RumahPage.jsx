import NavBudaya from "../../components/cards/nav-budaya/NavBudaya";
import ContentCard from "../../components/cards/content/ContentCard";
import { listRumahAdat } from "../../data/rumah.jsx";
import { useEffect } from "react";
import maskot from "/src/assets/maskots/MaskotRumah.svg";
import UpButton from "../../components/button/UpButton";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";

const RumahPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1
          style={{
            display: "flex",
            margin: "0px",
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--header-bg-color)",
            color: "white",
            fontFamily: "Finger Paint",
            fontSize: "22px",
            fontWeight: "200",
          }}
        >
          Daftar Rumah Adat Daerah di Indonesia
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0px",
            height: "fit-content",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "var(--header-bg-color)",
          }}
        >
          {listRumahAdat.map((rumah, index) => (
            <>
              {index != 0 && (
                <div
                  style={{
                    width: "2px",
                    height: "25px",
                    borderRadius: "50vh",
                    backgroundColor: "var(--accent-color-secondary-600)",
                    color: "white",
                  }}
                ></div>
              )}
              <NavBudaya daerah={rumah.daerah} key={index} />
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
          {listRumahAdat.map((rumah, index) => (
            <ContentCard
              jenis="Rumah adat"
              nama={rumah.namaRumahAdat}
              daerah={rumah.daerah}
              foto={rumah.foto}
              deskripsi={rumah.deskripsi}
              sumber={rumah.sumber}
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
        <UpButton posisi={"left"} />
      </div>
      <Footer />
    </>
  );
};

export default RumahPage;
