import { Link } from 'react-router-dom';
import sayapAtas from '../../assets/main-button/SayapAtas.svg';
import sayapBawah from '../../assets/main-button/SayapBawah.svg';
import './ExploreButton.css'; 

function ExploreButton() {
  return (
    <div className="explore-button-container">
      <img className="sayap-atas-kiri" src={sayapAtas} alt="Sayap Atas"/>
      <img className="sayap-bawah-kiri" src={sayapBawah} alt="Sayap Bawah"/>
      <Link
        to="/exploration"
        className="button-explore-link"
      >
        MULAI EKSPLORASI
      </Link>
      <img className="sayap-atas-kanan" src={sayapAtas} alt="Sayap Atas"/>
      <img className="sayap-bawah-kanan" src={sayapBawah} alt="Sayap Bawah"/>
    </div>
  );
}

export default ExploreButton;
