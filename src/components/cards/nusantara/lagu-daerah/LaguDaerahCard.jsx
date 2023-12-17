import maskot from '../../../../assets/maskots/MaskotNusantaraMusician.svg'
import melody from '../../../../assets/illustration/card/Melody.svg'
import '../style/NusantaraStyle.css'
import './LaguDaerah.css'

function LaguDaerahCard() {
  return (
    <div className="laman-adat-kanan">
      <div className='card-adat-kanan'>
          <div className="huruf-adat">T</div>
          <div className="nama-adat">Lagu Daerah</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-musician"></img>
      <img src={melody} className="melody-musician"></img>
    </div>
  )
}

export default LaguDaerahCard