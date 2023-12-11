import { Link } from 'react-router-dom';
import sayapAtas from '../../assets/main-button/SayapAtas.svg';
import sayapBawah from '../../assets/main-button/SayapBawah.svg';
import './ExploreButton.css'; // File CSS terpisah untuk mengatur tata letak

function ExploreButton() {
  return (
    <div className="explore-button-container">
      <img className="sayap-atas" src={sayapAtas} alt="Sayap Atas"/>
      <img className="sayap-bawah" src={sayapBawah} alt="Sayap Bawah"/>
      <Link
        to="/tujuan-tautan"
        className="button-explore-link"
      >
        MULAI EKSPLORASI
      </Link>
      <img className="sayap-atas" src={sayapAtas} alt="Sayap Atas"/>
      <img className="sayap-bawah" src={sayapBawah} alt="Sayap Bawah"/>
    </div>
  );
}

export default ExploreButton;
