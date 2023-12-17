import AlatMusikCard from "../../components/cards/nusantara/alat-musik/AlatMusikCard"
import LaguDaerahCard from "../../components/cards/nusantara/lagu-daerah/LaguDaerahCard"
import MakananKhasCard from "../../components/cards/nusantara/makanan-khas/MakananKhasCard"
import PakaianAdatCard from "../../components/cards/nusantara/pakaian-adat/PakaianAdatCard"
import PeninggalanSejarahCard from "../../components/cards/nusantara/peninggalan-sejarah/PeninggalanSejarahCard"
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
            <LaguDaerahCard />
            <AlatMusikCard />
            <MakananKhasCard />
            <PeninggalanSejarahCard />
        </div>
    )
}

export default ExplorationPage