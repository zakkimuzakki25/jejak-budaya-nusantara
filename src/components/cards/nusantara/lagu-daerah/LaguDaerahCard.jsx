import maskot from '../../../../assets/maskots/MaskotNusantaraMusician.svg'
import musicHijau from '../../../../assets/illustration/card/MusicHijau.svg'
import musicKuning from '../../../../assets/illustration/card/MusicKuning.svg'
import '../style/NusantaraStyle.css'
import './LaguDaerah.css'
import { useEffect, useRef, useState } from 'react'

function LaguDaerahCard() {
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
          <div className="huruf-adat">T</div>
          <div className="nama-adat">Lagu Daerah</div>
      </div>

      {/* properti */}
      {isVisible && (
        <>
          <img src={maskot} className="maskot-musician"></img>
          <img src={musicHijau} className="music-hijau-1"></img>
          <img src={musicKuning} className="music-kuning"></img>
          <img src={musicHijau} className="music-hijau-2"></img>
        </>
      )}
    </div>
  )
}

export default LaguDaerahCard