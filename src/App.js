import "./sass/App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProjectN1 from "./components/ProjetN°1";
import ProjectN2 from "./components/ProjetN°2";
import ProjectN3 from "./components/ProjetN°3";
import ProjectN4 from "./components/ProjetN°4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="titre-projet1" element={<ProjectN1 />} />
      <Route path="titre-projet2" element={<ProjectN2 />} />
      <Route path="titre-projet3" element={<ProjectN3 />} />
      <Route path="titre-projet4" element={<ProjectN4 />} />
      <Route path="" element={<NotFound />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
