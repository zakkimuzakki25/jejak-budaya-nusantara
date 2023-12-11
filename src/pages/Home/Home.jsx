import "./Home.css";
import petaIndonesia from "/src/assets/icon/petaIndonesia.svg";
import maskot from "/src/assets/maskots/MaskotMain.svg";
import ExploreButton from "../../components/button/ExploreButton";

function Home() {

  return (
    <div >
      <div className="home">
        <div className="home-explore">
          <div className="home-map">
            <img src={petaIndonesia} alt="Peta Indonesia" />
          </div>
          <div className="home-intro">
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
        <div className="button-explore-section">
          <ExploreButton />
        </div>
      </div>
      <div className="home-content">
        <div className="home-interesting-fact">
          <h1>Fakta Menarik</h1>
          <h1>Lihat Semua</h1>
        </div>
      </div>
      <img className="home-maskot" src={maskot} alt="maskot" />
    </div>
  );
}

export default Home;