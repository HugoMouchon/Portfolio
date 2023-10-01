import React from "react";
import { useParams } from "react-router-dom";
import "./project.scss";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import pokemon from "../../img/pokemon.jpg";
import cinema from "../../img/cinema.jpg";
import brand from "../../img/countries.jpg";
import ioprod from "../../img/ioprod.jpg";
import wedding from "../../img/wedding.jpg";
import ProjectDescription from "../../components/ProjectDescription/projectDescription";


function Project() {
  const { name } = useParams(); // Obtenez le paramètre de l'URL

  // Définissez une variable pour l'image en fonction du paramètre
  let currentImage;

  if (name === "Pokedex") {
    currentImage = pokemon;
  } else if (name === "Watowatch") {
    currentImage = cinema;
  } else if (name === "Brand") {
    currentImage = brand;
  } else if (name === "Ioprod") {
    currentImage = ioprod;
  } else if (name === "Wedding") {
    currentImage = wedding;
  }

  return (
    <div className="project-page">
      <div className="project__container">
        <Navbar />
        <div className="project__header">
          <div className="image-header-container">
            <img src={currentImage} alt="" />
          </div>
        </div>

        <div className="project__description__container">
            <ProjectDescription />
          </div>
      </div>
    </div>
  );
}

export default Project;
