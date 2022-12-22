import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Apropos from "../Apropos";
import SwipperProjet from "../SwipperProjets";

function Home() {
  return (
    <html>
      <body>
        <Navbar />
        <h1>Mes Projets</h1>
        <SwipperProjet/>
        <Apropos />
        <Footer />
      </body>
    </html>
  );
}

export default Home;
