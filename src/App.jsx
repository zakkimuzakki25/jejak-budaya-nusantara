import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ExplorationPage from "./pages/Exploration/ExplorationPage";
import MakananPage from "./pages/Budaya/MakananPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eksplorasi" element={<ExplorationPage />} />
          <Route path="/eksplorasi/makanan-khas" element={<MakananPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
