import React from "react";
import { useParams } from "react-router-dom";
import "./project.scss";
import Navbar from "../../components/Navbar/navbar";
import pokemon from "../../img/pokemon.jpg";
import cinema from "../../img/cinema.jpg";
import brand from "../../img/countries.jpg";
import ioprod from "../../img/ioprod.jpg";
import wedding from "../../img/wedding.jpg";
import ProjectDescription from "../../components/ProjectDescription/projectDescription";
import projectData from "./projectData.json";


function Project() {
  const { name } = useParams();

  if (!(name in projectData)) {
    return <div>Projet non trouvé</div>;
  }

  const project = projectData[name];


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
          <ProjectDescription project={project} />
        </div>
      </div>
    </div>
  );
}

export default Project;
