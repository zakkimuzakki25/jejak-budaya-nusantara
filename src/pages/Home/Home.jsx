import "./Home.css";
import petaIndonesia from "/src/assets/icon/petaIndonesia.svg";
import maskot from "/src/assets/maskots/MaskotMain.svg";
import maskotAwan from "/src/assets/maskots/MaskotMainSmileWithCloud.svg";
import ExploreButton from "../../components/button/ExploreButton";
import HomeSlider from "../../components/slider/HomeSlider";
import HomeAwan from "../../components/background/HomeAwan";
import VectorArrow from "../../assets/support/VectorArrow.svg";
import { faktaMenarik } from "../../data/faktaMenarik";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BubbleChat from "../../components/bubbleChat/BubbleChat";

function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isLoaded2, setIsLoaded2] = useState(false);

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
              Kami mengundang Anda untuk menemukan dan memahami keindahan
              warisan budaya, seni, dan tradisi yang telah menjadi bagian tak
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
        <HomeAwan />
        <div className="home-content">
          <div className="home-interesting-fact">
            <h1
              style={{
                fontFamily: "Handlee",
                fontSize: "25px",
                fontStyle: "normal",
              }}
            >
              Fakta Menarik
            </h1>
            <Link className="link-path">
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi augue. Etiam dapibus maximus dui sit amet egestas. Vestibulum condimentum orci sed sem egestas molestie."
            }
            setBubbleChat={setIsLoaded}
            handleClick={() => setIsLoaded2(true)}
            zIndex={99}
          />
          <img className="home-maskot" src={maskotAwan} alt="maskot" />
        </>
      ) : isLoaded2 ? (
        <>
          <BubbleChat
            message={"Bagian ini digunakan untuk eksplorasi"}
            setBubbleChat={setIsLoaded2}
            zIndex={97}
          />
          <img className="home-maskot" src={maskotAwan} alt="maskot" />
        </>
      ) : (
        <img className="home-maskot" src={maskot} alt="maskot" />
      )}
    </div>
  );
}

export default Home;
