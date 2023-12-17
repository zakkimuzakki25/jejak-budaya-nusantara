import maskot from '../../../../assets/maskots/MaskotNusantaraMainSmile2.svg'
import gong from '../../../../assets/illustration/card/Gong.svg'
import '../style/NusantaraStyle.css'
import './AlatMusik.css'

function AlatMusikCard() {
  return (
    <div className="laman-adat-kiri">
      <div className='card-adat-kiri'>
          <div className="huruf-adat">A</div>
          <div className="nama-adat">Alat Musik</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-alat-musik"></img>
      <img src={gong} className="gong-alat-musik"></img>
    </div>
  )
}

export default AlatMusikCard