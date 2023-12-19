import { Link } from "react-router-dom";
import { useEffect } from "react";
import { explorationList } from "../../data/ExplorationPageList";
import VectorArrow from "../../assets/support/VectorArrow.svg";
import "./ExplorationPage.css";

const ExplorationPage = () => {
<<<<<<< HEAD
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
=======
    let listWindow = window.localStorage.getItem("listExplorationJejakNusantara");
    listWindow = listWindow ? listWindow.split("#") : [];

    const clickHandler = (data) => {
        window.localStorage.setItem("listExplorationJejakNusantara", [...listWindow, data].join("#"));
        console.log(listWindow);
    };

>>>>>>> 5c309a9a0dedddc63e30c8549e40884ef07dab61
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
    <div id="exploration-container">
      <div className="nusantara-container">
        {explorationList.map((exploration, index) => (
          <div
            key={index}
            className={`card-nusantara-letter ${listWindow.includes(exploration.id) ? (index%2 == 0 ? "active-green" : "active-yellow") : ""}`}
            onClick={() => scrollToSection(exploration.id)}
          >
            {exploration.letter}
          </div>
        ))}
      </div>

      {explorationList.map((exploration, index) => (
        <div className="card-nusantara" id={exploration.id} key={index}>
          {exploration.position === "left" ? (
            <>
              {/* card maskot */}
              <exploration.card />

              {/* content */}
              <div className="content-nusantara">
                <div className="title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut mi augue. Etiam dapibus maximus dui sit amet
                  egestas. Vestibulum condimentum orci sed sem egestas molestie.
                  Sed tristique dui eros, in lacinia tellus pulvinar in.
                  Maecenas suscipit ut ligula at pretium.
                </div>
                <Link onClick={() => clickHandler(exploration.id)} to={exploration.path} className="link-path">
                  <p style={{margin: "0px"}}>lihat selengkapnya</p>
                  <img src={VectorArrow} alt="Vector Arrow" style={{height: "fit-content"}}/>
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* content */}
              <div
                className="content-nusantara"
                style={{
                  justifySelf: "end",
                  textAlign: "right",
                }}
              >
                <div className="title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut mi augue. Etiam dapibus maximus dui sit amet
                  egestas. Vestibulum condimentum orci sed sem egestas molestie.
                  Sed tristique dui eros, in lacinia tellus pulvinar in.
                  Maecenas suscipit ut ligula at pretium.
                </div>
                <Link onClick={() => clickHandler(exploration.id)} to={exploration.path} className="link-path">
                  <p style={{margin: "0px"}}>lihat selengkapnya</p>
                  <img src={VectorArrow} alt="Vector Arrow" style={{height: "fit-content"}}/>
                </Link>
              </div>

              {/* card maskot */}
              <exploration.card />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExplorationPage;
