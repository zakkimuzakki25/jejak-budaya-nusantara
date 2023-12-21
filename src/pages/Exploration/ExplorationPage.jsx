import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { explorationList } from "../../data/ExplorationPageList";
import maskotAwan from "/src/assets/maskots/MaskotMainSmileWithCloud.svg";
import VectorArrow from "../../assets/support/VectorArrow.svg";
import "./ExplorationPage.css";
import UpButton from "../../components/button/UpButton";
import BubbleChat from "../../components/bubbleChat/BubbleChat";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const ExplorationPage = () => {
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
  }, []);

  let listWindow = window.localStorage.getItem("listExplorationJejakNusantara");
  listWindow = listWindow ? listWindow.split("#") : [];

  const clickHandler = (data) => {
    window.localStorage.setItem(
      "listExplorationJejakNusantara",
      [...listWindow, data].join("#")
    );
  };

  const endHandler = () => {
    const date = new Date(Date.now());

    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    window.localStorage.setItem("tokenJBN", formattedDate);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div id="exploration-container">
        <div className="nusantara-container">
          {explorationList.map((exploration, index) => (
            <div
              key={index}
              className={`card-nusantara-letter ${
                listWindow.includes(exploration.id)
                  ? index % 2 == 0
                    ? "active-green"
                    : "active-yellow"
                  : ""
              }`}
              onClick={() => scrollToSection(exploration.id)}
            >
              {exploration.letter}
            </div>
          ))}
        </div>

        {explorationList.map((exploration, index) => (
          <>
            {exploration.position === "left" ? (
              <div className="card-nusantara left" id={exploration.id} key={index}>
                {/* card maskot */}
                <exploration.card />

                {/* content */}
                <div className="content-nusantara">
                  <div className="title">{exploration.header}</div>
                  <div className="content">{exploration.text}</div>
                  <Link
                    onClick={() => clickHandler(exploration.id)}
                    to={exploration.path}
                    className="link-path"
                  >
                    <p style={{ margin: "0px" }}>jelajahi</p>
                    <img
                      src={VectorArrow}
                      alt="Vector Arrow"
                      style={{ height: "fit-content" }}
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="card-nusantara right" id={exploration.id} key={index}>
                {/* content */}
                <div
                  className="content-nusantara"
                  style={{
                    justifySelf: "end",
                    textAlign: "right",
                  }}
                >
                  <div className="title">{exploration.header}</div>
                  <div className="content">{exploration.text}</div>
                  <Link
                    onClick={() => clickHandler(exploration.id)}
                    to={exploration.path}
                    className="link-path"
                  >
                    <p style={{ margin: "0px" }}>jelajahi</p>
                    <img
                      src={VectorArrow}
                      alt="Vector Arrow"
                      style={{ height: "fit-content" }}
                    />
                  </Link>
                </div>

                {/* card maskot */}
                <exploration.card />
              </div>
            )}
          </>
        ))}

        {isLoaded ? (
          <>
            <BubbleChat
              message={
                "Selamat datang di Halaman Eksplorasi! Ini adalah tempat di mana kamu dapat memulai perjalanan untuk menemukan dan merasakan keindahan dari keberagaman budaya Nusantara."
              }
              setBubbleChat={setIsLoaded}
              handleClick={() => setIsLoaded2(true)}
              zIndex={99}
            />
            <img className="home-maskot" src={maskotAwan} alt="maskot" />
          </>
        ) : (
          isLoaded2 && (
            <>
              <BubbleChat
                message={
                  "Ini adalah Fitur Navigasi Cepat! Alat praktis ini akan membantu kamu menjelajah dengan mudah di sepanjang bagian eksplorasi. Bagian ini akan terasa seperti sebuah puzzle yang berwarna setelah kamu menjelajahi keunikan pada setiap bagian. Segera lengkapi puzzle dan ciptakan petualangan visual yang menarik dari perjalanan eksplorasimu."
                }
                setBubbleChat={setIsLoaded2}
                handleClick={endHandler}
                zIndex={97}
              />
              <img className="home-maskot" src={maskotAwan} alt="maskot" />
            </>
          )
        )}

        <UpButton posisi={"right"} />
      </div>
      <Footer />
    </>
  );
};

export default ExplorationPage;
