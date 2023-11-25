import { Link } from 'react-router-dom'
import sayapAtas from '../../assets/main-button/SayapAtas.svg'
import sayapBawah from '../../assets/main-button/SayapBawah.svg'

function MainButton() {
  return (
    <div>
        <img src={sayapAtas}/>
        <img src={sayapBawah}/>
        <Link style={{
            height: "50px",
            width: "150px",
            backgroundColor: "red"
        }}></Link>
        <img src={sayapAtas}/>
        <img src={sayapBawah}/>
    </div>
  )
}

export default MainButton