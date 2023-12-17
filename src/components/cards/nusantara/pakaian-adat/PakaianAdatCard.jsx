import maskot from '../../../../assets/maskots/MaskotNusantaraMainSmile.svg'
import pakaian from '../../../../assets/illustration/card/BajuAdat.svg'
import topi from '../../../../assets/illustration/card/TopiAdat.svg'
import '../style/NusantaraStyle.css'
import './PakaianAdat.css'

function PakaianAdatCard() {
  return (
    <div className="laman-adat-kanan">
      <div className='card-adat-kanan'>
          <div className="huruf-adat">U</div>
          <div className="nama-adat">Pakaian Adat</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-pakaian-adat"></img>
      <img src={pakaian} className="pakaian-adat"></img>
      <img src={topi} className="topi-adat"></img>
    </div>
  )
}

export default PakaianAdatCard