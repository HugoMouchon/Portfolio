import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Apropos from "../Apropos";
import Swipper from "../SwipperProjets";
import Header from "../Header";

function Home() {
  return (
    <html>
      <body>
        {/* <Navbar /> */}
        <Header />
        <Swipper />
        <Apropos />
        <Footer />
      </body>
    </html>
  );
}

export default Home;
