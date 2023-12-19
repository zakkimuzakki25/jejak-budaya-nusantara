import maskot from '../../../../assets/maskots/MaskotNusantaraMain.svg'
import candi from '../../../../assets/illustration/card/Candi.svg'
import '../style/NusantaraStyle.css'
import './PeninggalanSejarah.css'
import { useEffect, useRef, useState } from 'react';

function PeninggalanSejarahCard() {
  const [isVisible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === cardRef.current) {
            setVisible(true)
          }
        } else {
          if (entry.target === cardRef.current) {
            setVisible(false)
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="laman-adat-kiri">
      <div ref={cardRef} className='card-adat-kiri'>
          <div className="huruf-adat">A</div>
          <div className="nama-adat">Peninggalan Sejarah</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-peninggalan-sejarah"></img>
          <img src={candi} className="candi-peninggalan"></img>
        </>
      )}
    </div>
  )
}

export default PeninggalanSejarahCard