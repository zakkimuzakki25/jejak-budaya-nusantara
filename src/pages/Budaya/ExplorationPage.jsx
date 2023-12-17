import PakaianAdatCard from "../../components/cards/nusantara/pakaian-adat/PakaianAdatCard"
import RumahAdatCard from "../../components/cards/nusantara/rumah-adat/RumahAdatCard"
import SenjataTradisionalCard from "../../components/cards/nusantara/senjata-tradisional/SenjataTradisionalCard"
import TarianTradisioanlCard from "../../components/cards/nusantara/tarian-tradisional/TarianTradisionalCard"
import UpacaraAdatCard from "../../components/cards/nusantara/upacara-adat/UpacaraAdatCard"


const ExplorationPage = () => {
    return (
        <div>
            <RumahAdatCard />
            <PakaianAdatCard />
            <UpacaraAdatCard />
            <SenjataTradisionalCard />
            <TarianTradisioanlCard />
        </div>
    )
}

export default ExplorationPage