import maskot from '../../../../assets/maskots/MaskotNusantaraMain.svg'
import candi from '../../../../assets/illustration/card/Candi.svg'
import '../style/NusantaraStyle.css'
import './PeninggalanSejarah.css'

function PeninggalanSejarahCard() {
  return (
    <div className="laman-adat-kiri">
      <div className='card-adat-kiri'>
          <div className="huruf-adat">A</div>
          <div className="nama-adat">Peninggalan Sejarah</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-peninggalan-sejarah"></img>
      <img src={candi} className="candi-peninggalan"></img>
    </div>
  )
}

export default PeninggalanSejarahCard