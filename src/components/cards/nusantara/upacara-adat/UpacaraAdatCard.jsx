import maskot from '../../../../assets/maskots/MaskotNusantaraMain.svg'
import janurAdat from '../../../../assets/illustration/card/JanurKuning.svg'
import '../style/NusantaraStyle.css'
import './UpacaraAdat.css'

function UpacaraAdatCard() {
  return (
    <div className="laman-adat">
      <div className='card-adat-kiri'>
          <div className="huruf-adat">S</div>
          <div className="nama-adat">Upacara Adat</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-upacara-adat"></img>
      <img src={janurAdat} className="janur-adat"></img>
    </div>
  )
}

export default UpacaraAdatCard