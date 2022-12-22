import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Apropos from "../Apropos";
import Swipper from "../SwipperProjets";

function Home() {
  return (
    <html>
      <body>
        <Navbar />
        <Swipper/>
        <Apropos />
        <Footer />
      </body>
    </html>
  );
}

export default Home;
