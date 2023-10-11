import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import AnimatedCat404 from "./animationCat/animatedCat404";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="notFound__container" >
      <div className="notFound__nav">
        <Navbar />
      </div>

      <div className="notFound__cat">
        <AnimatedCat404 />
      </div>

      <div className="notFound__foo">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
