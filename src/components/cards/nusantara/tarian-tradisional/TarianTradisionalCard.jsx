import maskot from '../../../../assets/maskots/MaskotNusantaraMainSmile.svg'
import topeng from '../../../../assets/illustration/card/Topeng.svg'
import kudaLumping from '../../../../assets/illustration/card/KudaLumping.svg'
import '../style/NusantaraStyle.css'
import './TarianTradisional.css'

function TarianTradisioanlCard() {
  return (
    <div className="laman-adat-kiri">
      <div className='card-adat-kiri'>
          <div className="huruf-adat">N</div>
          <div className="nama-adat">Tarian Tradisional</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-tarian-tradisional"></img>
      <img src={topeng} className="topeng-tarian"></img>
      <img src={kudaLumping} className="kuda-lumping"></img>
    </div>
  )
}

export default TarianTradisioanlCard