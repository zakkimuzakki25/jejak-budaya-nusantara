import ContentCard from "../../components/cards/content/ContentCard";
import { listLagu } from "../../data/lagu.jsx";
import React, { useEffect, useState } from "react";
import maskot from "/src/assets/maskots/MaskotMusician.svg";

const LaguPage = () => {
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
      {listLagu.map((lagu, index) => (
        <ContentCard
          jenis="Lagu khas"
          nama={lagu.namaLagu}
          daerah={lagu.daerah}
          foto={lagu.foto}
          deskripsi={lagu.deskripsi}
          sumber={lagu.sumber}
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

export default LaguPage;
