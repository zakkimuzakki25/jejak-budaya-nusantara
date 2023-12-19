import maskot from '../../../../assets/maskots/MaskotNusantaraFoodie.svg'
import tumpeng from '../../../../assets/illustration/card/Tumpeng.svg'
import '../style/NusantaraStyle.css'
import './MakananKhas.css'
import { useEffect, useRef, useState } from 'react';

function MakananKhasCard() {
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
          <div className="huruf-adat">R</div>
          <div className="nama-adat">Makanan Khas</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-foodie"></img>
          <img src={tumpeng} className="tumpeng-makanan"></img>
        </>
      )}
    </div>
  )
}

export default MakananKhasCard