import React from 'react'
import FaktaCard from "../../components/cards/content/FaktaCard";
import { faktaMenarik } from "../../data/faktaMenarik.jsx";
import { useEffect } from "react";
import UpButton from "../../components/button/UpButton";

const FaktaPage = () => {
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
          }}>Daftar Fakta Menarik Budaya Indonesia</h1>
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
          {faktaMenarik.map((faktamenarik, index) => (
            <FaktaCard
              jenis={faktamenarik.judul}
              nama={faktamenarik.namafaktamenarik}
              daerah={faktamenarik.daerah}
              foto={faktamenarik.src}
              deskripsi={faktamenarik.deskripsi}
              sumber={faktamenarik.sumber}
              key={index}
            />
          ))}
        </div>
        <UpButton posisi={"left"}/>
        </div>
      );
}

export default FaktaPage

