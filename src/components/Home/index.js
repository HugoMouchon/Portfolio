import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Apropos from "../Apropos";

function Home() {
  return (
    <html>
      <body>
        <Navbar />
        <h1>Home</h1>
        <Apropos />
        <Footer />
      </body>
    </html>
  );
}

export default Home;
