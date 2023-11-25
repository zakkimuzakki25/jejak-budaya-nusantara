import React from "react";
import "./Home.css";
import petaIndonesia from "/src/assets/icon/petaIndonesia.svg";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="homeIndonesia">
          <div>
            <img src={petaIndonesia} alt="Peta Indonesia" />
          </div>
          <div>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut mi augue. Etiam dapibus maximus dui sit amet egestas.
              Vestibulum condimentum orci sed sem egestas molestie. Sed
              tristique dui eros, in lacinia tellus pulvinar in. Maecenas
              suscipit ut ligula at pretium.
            </p>
          </div>
        </div>
        <div className="homeExploration">
          <h1>Mulai Explorasi</h1>
        </div>
      </div>
      <div className="homeFakta">
        <div className="fakta">
          <h1>Fakta Menarik</h1>
          <h1>Lihat Semua</h1>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Home;
