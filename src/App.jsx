import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectN1 from "./pages/ProjetN°1";
import ProjectN2 from "./pages/ProjetN°2";
import ProjectN3 from "./pages/ProjetN°3";
import ProjectN4 from "./pages/ProjetN°4";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Apropos from "./pages/Apropos/apropos";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="titre-projet1" element={<ProjectN1 />} />
          <Route path="titre-projet2" element={<ProjectN2 />} />
          <Route path="titre-projet3" element={<ProjectN3 />} />
          <Route path="titre-projet4" element={<ProjectN4 />} />
          <Route path="A-Propos-De-Moi" element={<Apropos />} />
          <Route path="" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App
