import maskot from '../../../../assets/maskots/MaskotNusantaraMain.svg'
import rumahAdat from '../../../../assets/illustration/card/Rumah.svg'
import '../style/NusantaraStyle.css'
import './RumahAdat.css'
import { useEffect, useRef, useState } from 'react';

function RumahAdatCard() {
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
          <div className="huruf-adat">N</div>
          <div className="nama-adat">Rumah Adat</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-rumah-adat"></img>
          <img src={rumahAdat} className="rumah-adat"></img>
        </>
      )}
    </div>
  )
}

export default RumahAdatCard
