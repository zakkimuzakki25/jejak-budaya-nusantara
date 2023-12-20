import "./Home.css";
import petaIndonesia from "/src/assets/icon/petaIndonesia.svg";
import maskot from "/src/assets/maskots/MaskotMain.svg";
import ExploreButton from "../../components/button/ExploreButton";
import HomeSlider from "../../components/slider/HomeSlider";
import HomeAwan from "../../components/background/HomeAwan";
import VectorArrow from "../../assets/support/VectorArrow.svg";
import { faktaMenarik } from "../../data/faktaMenarik";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="home">
        <div className="home-explore">
          <div className="home-map">
            <img src={petaIndonesia} alt="Peta Indonesia" />
          </div>
          <div className="home-intro">
            <h1>Selamat Datang di Eksplorasi Budaya Indonesia</h1>
            <p>
            Kami mengundang Anda untuk
            menemukan dan memahami keindahan warisan budaya, seni, dan tradisi yang
            telah menjadi bagian tak terpisahkan dari kehidupan masyarakat
            Indonesia.
            </p>
          </div>
        </div>
        <div className="button-explore-section">
          <ExploreButton data={"MULAI EKSPLORASI"} />
        </div>
      </div>
      <div className="home-awan">
        <HomeAwan />
        <div className="home-content">
          <div className="home-interesting-fact">
            <h1 style={{
              fontFamily: 'Handlee',
              fontSize: '25px',
              fontStyle: 'normal',
            }}>Fakta Menarik</h1>
            <Link to={"/fakta-menarik"}className="link-path">
              <p style={{ margin: "0px" }}>lihat semua</p>
              <img src={VectorArrow} style={{ height: "fit-content" }} />
            </Link>
          </div>
          <div className="home-slide-fact">
            <HomeSlider data={faktaMenarik} />
          </div>
        </div>
      </div>
      <img className="home-maskot" src={maskot} alt="maskot" />
    </div>
  );
}

export default Home;
