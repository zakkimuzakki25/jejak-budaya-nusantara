import maskot from '../../../../assets/maskots/MaskotNusantaraMain.svg'
import rumahAdat from '../../../../assets/illustration/card/Rumah.svg'
import '../style/NusantaraStyle.css'
import './RumahAdat.css'

function PakaianAdatCard() {
  return (
    <div className="laman-adat-kiri">
      <div className='card-adat'>
          <div className="huruf-adat">N</div>
          <div className="nama-adat">Rumah Adat</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-rumah-adat"></img>
      <img src={rumahAdat} className="rumah-adat"></img>
    </div>
  )
}

export default PakaianAdatCard