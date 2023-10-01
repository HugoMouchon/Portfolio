import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuProjects from "./pages/MenuProjects/menuProjects";
import Project from "./pages/Project/project";
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
          <Route path="/Menu-Projects" element={<MenuProjects />} />
          <Route path="/Project/:name" element={<Project />} />
          <Route path="/A-Propos-De-Moi" element={<Apropos />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App
