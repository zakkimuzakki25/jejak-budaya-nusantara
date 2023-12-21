import "./Home.css";
import petaIndonesia from "/src/assets/icon/petaIndonesia.svg";
import maskot from "/src/assets/maskots/MaskotMain.svg";
import maskotAwan from "/src/assets/maskots/MaskotMainSmileWithCloud.svg";
import ExploreButton from "../../components/button/ExploreButton";
import HomeSlider from "../../components/slider/HomeSlider";
import VectorArrow from "../../assets/support/VectorArrow.svg";
import { faktaMenarik } from "../../data/faktaMenarik";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BubbleChat from "../../components/bubbleChat/BubbleChat";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import BatikAwan from "../../assets/support/BatikAwan.svg";

function Home() {
  const token = window.localStorage.getItem("tokenJBN");
  const date = new Date(Date.now());
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  const [isLoaded, setIsLoaded] = useState(
    token != formattedDate ? true : false
  );
  const [isLoaded2, setIsLoaded2] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (token !== formattedDate) {
      window.localStorage.setItem("listExplorationJejakNusantara", "");
    }
  }, []);

  useEffect(() => {
    if (isLoaded2) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isLoaded2]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className="home">
        <div className="home-explore">
          <div className="home-map">
            <img src={petaIndonesia} alt="Peta Indonesia" />
          </div>
          <div className="home-intro">
            <h1>Selamat Datang di JBN</h1>
            <p>
              Kami mengajak Anda untuk menemukan dan memahami keindahan warisan
              budaya, seni, dan tradisi yang telah menjadi bagian tak
              terpisahkan dari kehidupan masyarakat Indonesia.
            </p>
          </div>
        </div>
        <div
          className="button-explore-section"
          style={isLoaded2 ? { zIndex: "99" } : {}}
        >
          <ExploreButton data={"MULAI EKSPLORASI"} />
        </div>
      </div>
      <div className="home-awan">
        <div className="home-content">
          <img
            src={BatikAwan}
            alt="batik-atas"
            className="batik-awan-kiriatas"
          />
          <img
            src={BatikAwan}
            alt="batik-atas"
            className="batik-awan-kananatas"
          />
          <img
            src={BatikAwan}
            alt="batik-bawah"
            className="batik-awan-kiribawah-atas"
          />
          <img
            src={BatikAwan}
            alt="batik-bawah"
            className="batik-awan-kiribawah-bawah"
          />
          <img
            src={BatikAwan}
            alt="batik-bawah"
            className="batik-awan-kananbawah-atas"
          />
          <img
            src={BatikAwan}
            alt="batik-bawah"
            className="batik-awan-kananbawah-bawah"
          />
          <div className="home-interesting-fact">
            <h1>Fakta Menarik</h1>
            <Link to={"/fakta-menarik"} className="link-path">
              <p style={{ margin: "0px" }}>lihat semua</p>
              <img src={VectorArrow} style={{ height: "fit-content" }} />
            </Link>
          </div>
          <div className="home-slide-fact">
            <HomeSlider data={faktaMenarik} />
          </div>
        </div>
      </div>

      {isLoaded ? (
        <>
          <BubbleChat
            message={
              "Halo penjelajah! Selamat datang di website Jejak Budaya Nusantara. Kenalin aku adalah Nusa. Di sini, aku akan memandu kamu untuk menjelajahi keindahan dan keanekaragaman budaya Indonesia."
            }
            setBubbleChat={setIsLoaded}
            handleClick={() => setIsLoaded2(true)}
            zIndex={99}
          />
          <img className="home-maskot active" src={maskotAwan} alt="maskot" />
        </>
      ) : isLoaded2 ? (
        <>
          <BubbleChat
            message={
              "Dengan mengklik bagian ini, kamu dapat memulai perjalanan virtual kamu untuk menjelajahi keberagaman budaya Nusantara. Temukan cerita-cerita menarik, warisan seni yang unik, dan tradisi-tradisi yang memperkaya kehidupan masyarakat Indonesia.Bagian ini digunakan untuk eksplorasi"
            }
            setBubbleChat={setIsLoaded2}
            zIndex={97}
          />
          <img className="home-maskot active" src={maskotAwan} alt="maskot" />
        </>
      ) : (
        <img className="home-maskot" src={maskot} alt="maskot" />
      )}
      <Footer />
    </div>
  );
}

export default Home;
