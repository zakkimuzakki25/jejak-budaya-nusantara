import maskot from '../../../../assets/maskots/MaskotNusantaraSenjata.svg'
import senjata from '../../../../assets/illustration/card/BambuRuncing.svg'
import '../style/NusantaraStyle.css'
import './SenjataTradisional.css'
import { useEffect, useRef, useState } from 'react';

function SenjataTradisionalCard() {
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
    <div className="laman-adat-kanan">
      <div ref={cardRef} className='card-adat-kanan'>
          <div className="huruf-adat">A</div>
          <div className="nama-adat">Senjata Tradisional</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-senjata-tradisional"></img>
          <img src={senjata} className="senjata-bambu"></img>
        </>
      )}
    </div>
  )
}

export default SenjataTradisionalCard