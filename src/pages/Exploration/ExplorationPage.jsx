import { Link } from "react-router-dom";
import { explorationList } from "../../data/ExplorationPageList";
import VectorArrow from "../../assets/support/VectorArrow.svg";
import "./ExplorationPage.css";

const ExplorationPage = () => {
    return (
        <div className="exploration-container">
            {explorationList.map((exploration, index) => (
                <div className="card-nusantara" key={index}>
                    {exploration.position === "left" ? (
                        <>
                            {/* card maskot */}
                            <exploration.card />

                            {/* content */}
                            <div className="content-nusantara">
                                <div className="title">Lorem ipsum dolor sit amet, consectetur</div>
                                <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi augue. Etiam dapibus maximus dui sit amet egestas. Vestibulum condimentum orci sed sem egestas molestie. Sed tristique dui eros, in lacinia tellus pulvinar in. Maecenas suscipit ut ligula at pretium.</div>
                                <Link to="/detail" className="link-path">
                                    <p>lihat selengkapnya</p>
                                    <img src={VectorArrow} alt="Vector Arrow" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* content */}
                            <div className="content-nusantara" style={{
                                justifySelf: "end",
                                textAlign: "right",
                            }}>
                                <div className="title">Lorem ipsum dolor sit amet, consectetur</div>
                                <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi augue. Etiam dapibus maximus dui sit amet egestas. Vestibulum condimentum orci sed sem egestas molestie. Sed tristique dui eros, in lacinia tellus pulvinar in. Maecenas suscipit ut ligula at pretium.</div>
                                <Link to="/detail" className="link-path">
                                    <p>lihat selengkapnya</p>
                                    <img src={VectorArrow} alt="Vector Arrow" />
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