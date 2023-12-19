import { useEffect, useRef, useState } from 'react';
import maskot from '../../../../assets/maskots/MaskotNusantaraMainSmile2.svg';
import janurAdat from '../../../../assets/illustration/card/JanurKuning.svg';
import '../style/NusantaraStyle.css';
import './UpacaraAdat.css';

function UpacaraAdatCard() {
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
        <div className="huruf-adat">S</div>
        <div className="nama-adat">Upacara Adat</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-upacara-adat"></img>
          <img src={janurAdat} className="janur-adat"></img>
        </>
      )}
    </div>
  );
}

export default UpacaraAdatCard;
