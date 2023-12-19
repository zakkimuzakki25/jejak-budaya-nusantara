import maskot from '../../../../assets/maskots/MaskotNusantaraMainSmile.svg'
import pakaian from '../../../../assets/illustration/card/BajuAdat.svg'
import topi from '../../../../assets/illustration/card/TopiAdat.svg'
import '../style/NusantaraStyle.css'
import './PakaianAdat.css'
import { useEffect, useRef, useState } from 'react'

function PakaianAdatCard() {
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
          <div className="huruf-adat">U</div>
          <div className="nama-adat">Pakaian Adat</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-pakaian-adat"></img>
          <img src={pakaian} className="pakaian-adat"></img>
          <img src={topi} className="topi-adat"></img>
        </>
      )}
    </div>
  )
}

export default PakaianAdatCard