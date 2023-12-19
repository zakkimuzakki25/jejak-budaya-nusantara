import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ExplorationPage from "./pages/Exploration/ExplorationPage";
import PakaianPage from "./pages/Budaya/PakaianPage";
import LaguPage from "./pages/Budaya/LaguPage";
import AlatMusikPage from "./pages/Budaya/AlatMusikPage";
import MakananPage from "./pages/Budaya/MakananPage";
import PeniggalanPage from "./pages/Budaya/PeninggalanPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eksplorasi" element={<ExplorationPage />} />
          <Route path="/eksplorasi/pakaian-adat" element={<PakaianPage />} />
          <Route path="/eksplorasi/lagu-daerah" element={<LaguPage />} />
          <Route path="/eksplorasi/alat-musik" element={<AlatMusikPage />} />
          <Route path="/eksplorasi/makanan-khas" element={<MakananPage />} />
          <Route path="/eksplorasi/peninggalan-sejarah" element={<PeniggalanPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
