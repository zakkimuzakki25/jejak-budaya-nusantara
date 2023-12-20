import AlatMusikCard from "../components/cards/nusantara/alat-musik/AlatMusikCard";
import LaguDaerahCard from "../components/cards/nusantara/lagu-daerah/LaguDaerahCard";
import MakananKhasCard from "../components/cards/nusantara/makanan-khas/MakananKhasCard";
import PakaianAdatCard from "../components/cards/nusantara/pakaian-adat/PakaianAdatCard";
import PeninggalanSejarahCard from "../components/cards/nusantara/peninggalan-sejarah/PeninggalanSejarahCard";
import RumahAdatCard from "../components/cards/nusantara/rumah-adat/RumahAdatCard";
import SenjataTradisionalCard from "../components/cards/nusantara/senjata-tradisional/SenjataTradisionalCard";
import TarianTradisioanlCard from "../components/cards/nusantara/tarian-tradisional/TarianTradisionalCard";
import UpacaraAdatCard from "../components/cards/nusantara/upacara-adat/UpacaraAdatCard";

export const explorationList = [
  {
    id: "rumah-adat",
    letter: "N",
    position: "left",
    header: "Rumah Adat di Indonesia",
    text: "Rumah adat di Indonesia mencerminkan kekayaan arsitektur dan kebudayaan setempat. Dibangun dengan bahan-bahan lokal, rumah adat ini memiliki desain yang unik dan khas di setiap daerahnya. Mereka bukan hanya tempat tinggal, tetapi juga mencerminkan nilai-nilai budaya yang diwariskan dari generasi ke generasi.",
    path: "/eksplorasi/rumah-adat",
    card: RumahAdatCard,
  },
  {
    id: "pakaian-adat",
    letter: "U",
    position: "right",
    header: "Pakaian Adat di Indonesia",
    text: "Pakaian adat Indonesia mencerminkan keindahan, keberagaman, dan kekayaan budaya setiap suku dan daerah. Setiap pakaian memiliki makna dan keunikan tersendiri, sering kali terkait dengan ritual, upacara, atau kegiatan tradisional lainnya.",
    path: "/eksplorasi/pakaian-adat",
    card: PakaianAdatCard,
  },
  {
    id: "upacara-adat",
    letter: "S",
    position: "left",
    header: "Upacara Adat di Indonesia",
    text: "Upacara adat merupakan bagian integral dari kehidupan masyarakat Indonesia. Mereka merayakan momen-momen penting dalam siklus kehidupan seperti kelahiran, pernikahan, atau kematian. Upacara ini menunjukkan kekayaan nilai, tradisi, dan kepercayaan yang dijaga dengan cermat.",
    path: "/eksplorasi/upacara-adat",
    card: UpacaraAdatCard,
  },
  {
    id: "senjata-tradisional",
    letter: "A",
    position: "right",
    header: "Senjata Tradisional di Indonesia",
    text: "Senjata tradisional mencerminkan sejarah perjuangan dan keberanian suku-suku di Indonesia. Bukan hanya sebagai alat pertahanan, senjata-senjata ini juga memiliki nilai simbolis yang dalam dalam budaya setempat.",
    path: "/eksplorasi/senjata-tradisional",
    card: SenjataTradisionalCard,
  },
  {
    id: "tarian-tradisional",
    letter: "N",
    position: "left",
    header: "Tarian Tradisional di Indonesia",
    text: "Tarian tradisional Indonesia adalah ekspresi seni dan kekayaan budaya. Setiap gerakan menunjukkan cerita, nilai, dan keindahan yang melekat pada kehidupan sehari-hari masyarakat setempat.",
    path: "/eksplorasi/tarian-tradisional",
    card: TarianTradisioanlCard,
  },
  {
    id: "lagu-daerah",
    letter: "T",
    position: "right",
    header: "Lagu Daerah di Indonesia",
    text: "Lagu daerah merupakan warisan tak ternilai dalam bentuk musik dan lirik yang mencerminkan sejarah, keindahan alam, dan kehidupan masyarakat di suatu daerah.",
    path: "/eksplorasi/lagu-daerah",
    card: LaguDaerahCard,
  },
  {
    id: "alat-musik",
    letter: "A",
    position: "left",
    header: "Alat Musik di Indonesia",
    text: "Alat musik tradisional Indonesia adalah warisan budaya yang unik, memainkan peran penting dalam ritual, upacara adat, hingga hiburan. Setiap alat musik memiliki suara khas yang mencerminkan keberagaman budaya di Indonesia.",
    path: "/eksplorasi/alat-musik",
    card: AlatMusikCard,
  },
  {
    id: "makanan-khas",
    letter: "R",
    position: "right",
    header: "Makanan Khas di Indonesia",
    text: "Makanan khas Indonesia merupakan perpaduan unik dari rasa, aroma, dan bahan-bahan lokal. Setiap hidangan mencerminkan kekayaan rempah-rempah, tradisi memasak, dan keanekaragaman kuliner di berbagai daerah.",
    path: "/eksplorasi/makanan-khas",
    card: MakananKhasCard,
  },
  {
    id: "peninggalan-sejarah",
    letter: "A",
    position: "left",
    header: "Peninggalan Sejarah di Indonesia",
    text: "Peninggalan sejarah mencakup candi, bangunan bersejarah, artefak, dan situs-situs yang memperkaya sejarah Indonesia. Mereka mencerminkan kejayaan masa lampau, kebudayaan, dan kearifan lokal yang menjadi warisan berharga.",
    path: "/eksplorasi/peninggalan-sejarah",
    card: PeninggalanSejarahCard,
  },
];
