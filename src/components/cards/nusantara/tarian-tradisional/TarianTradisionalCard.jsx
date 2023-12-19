import maskot from '../../../../assets/maskots/MaskotNusantaraMainSmile.svg'
import topeng from '../../../../assets/illustration/card/Topeng.svg'
import kudaLumping from '../../../../assets/illustration/card/KudaLumping.svg'
import '../style/NusantaraStyle.css'
import './TarianTradisional.css'
import { useEffect, useRef, useState } from 'react'

function TarianTradisioanlCard() {
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
          <div className="nama-adat">Tarian Tradisional</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-tarian-tradisional"></img>
          <img src={topeng} className="topeng-tarian"></img>
          <img src={kudaLumping} className="kuda-lumping"></img>
        </>
      )}
    </div>
  )
}

export default TarianTradisioanlCard