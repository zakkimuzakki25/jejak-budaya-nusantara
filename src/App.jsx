import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ExplorationPage from "./pages/Exploration/ExplorationPage";
import RumahPage from "./pages/Budaya/RumahPage";
import PakaianPage from "./pages/Budaya/PakaianPage";
import UpacaraPage from "./pages/Budaya/UpacaraPage";
import SenjataPage from "./pages/Budaya/SenjataPage";
import TarainPage from "./pages/Budaya/TarianPage";
import LaguPage from "./pages/Budaya/LaguPage";
import AlatMusikPage from "./pages/Budaya/AlatMusikPage";
import MakananPage from "./pages/Budaya/MakananPage";
import PeniggalanPage from "./pages/Budaya/PeninggalanPage";
import TentangKami from "./pages/TentangKami/TentangKami";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eksplorasi" element={<ExplorationPage />} />
          <Route path="/eksplorasi/rumah-adat" element={<RumahPage />} />
          <Route path="/eksplorasi/pakaian-adat" element={<PakaianPage />} />
          <Route path="/eksplorasi/upacara-adat" element={<UpacaraPage />} />
          <Route path="/eksplorasi/senjata-tradisional" element={<SenjataPage />} />
          <Route path="/eksplorasi/tarian-tradisional" element={<TarainPage />} />
          <Route path="/eksplorasi/lagu-daerah" element={<LaguPage />} />
          <Route path="/eksplorasi/alat-musik" element={<AlatMusikPage />} />
          <Route path="/eksplorasi/makanan-khas" element={<MakananPage />} />
          <Route path="/eksplorasi/peninggalan-sejarah" element={<PeniggalanPage />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
