import maskot from '../../../../assets/maskots/MaskotNusantaraFoodie.svg'
import tumpeng from '../../../../assets/illustration/card/Tumpeng.svg'
import '../style/NusantaraStyle.css'
import './MakananKhas.css'

function MakananKhasCard() {
  return (
    <div className="laman-adat-kanan">
      <div className='card-adat-kanan'>
          <div className="huruf-adat">R</div>
          <div className="nama-adat">Makanan Khas</div>
      </div>

      {/* properti */}
      <img src={maskot} className="maskot-foodie"></img>
      <img src={tumpeng} className="tumpeng-makanan"></img>
    </div>
  )
}

export default MakananKhasCard