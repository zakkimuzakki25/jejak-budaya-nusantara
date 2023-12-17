import maskot from '../../../../assets/maskots/MaskotNusantaraSenjata.svg'
import senjata from '../../../../assets/illustration/card/BambuRuncing.svg'
import '../style/NusantaraStyle.css'
import './SenjataTradisional.css'

function SenjataTradisionalCard() {
  return (
    <div className="laman-adat-kanan">
      <div className='card-adat-kanan'>
          <div className="huruf-adat">A</div>
          <div className="nama-adat">Senjata Tradisional</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-senjata-tradisional"></img>
      <img src={senjata} className="senjata-bambu"></img>
    </div>
  )
}

export default SenjataTradisionalCard