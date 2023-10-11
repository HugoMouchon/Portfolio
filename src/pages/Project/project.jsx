import React, { useRef, useEffect } from "react";
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
import ProjectList from "../../components/ProjectList/projectList";
import Footer from "../../components/Footer/footer";
import transitionTop from "../../Animation/transitionTop";
import { fadeInImageHeader, fadeInTitleDescription, fadeInDescription, fadeInTitleProject, fadeInImageProject } from "./animation";
import Button from "../../components/Button/button";

function Project() {
  // Récupérer le nom du projet à partir des paramètres de l'URL
  const { name } = useParams();

  // Références pour les éléments DOM que nous souhaitons animer
  const imageHeaderRef = useRef(null);
  const titleDescriptionRef = useRef(null);
  const descriptionProjectRef = useRef(null);
  const titleProjectRef = useRef(null);
  const imageProjectRef = useRef(null);

  // Utiliser useEffect pour déclencher les animations lorsque le composant est monté
  useEffect(() => {
    const animateElement = (element, animation) => {
      if (element && animation) {
        animation(element);
      }
    };

    // Appliquer différentes animations aux éléments avec les références spécifiées
    animateElement(imageHeaderRef.current, fadeInImageHeader);
    animateElement(titleDescriptionRef.current, fadeInTitleDescription);
    animateElement(descriptionProjectRef.current, fadeInDescription);
    animateElement(titleProjectRef.current, fadeInTitleProject);
    animateElement(imageProjectRef.current, fadeInImageProject);
  }, []);

  // Vérifier si le projet spécifié dans les paramètres de l'URL existe dans les données du projet
  if (!(name in projectData)) {
    return <div>Projet non trouvé</div>;
  }

  // Obtenir les données du projet actuel
  const project = projectData[name];

  // Sélectionner l'image en fonction du nom du projet
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

  // Obtenir la liste de tous les projets et l'index du projet actuel
  const projects = Object.keys(projectData);
  const currentIndex = projects.indexOf(name);

  // Fonctions pour gérer le passage aux projets précédents et suivants
  const handlePreviousClick = () => {
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    const previousProjectName = projects[previousIndex];
    window.scrollTo(0, 0);
    window.location.href = `/Project/${previousProjectName}`;
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProjectName = projects[nextIndex];
    window.scrollTo(0, 0);
    window.location.href = `/Project/${nextProjectName}`;
  };

  return (
    <div className="project-page">
      <div className="project__container">
        <Navbar />
        <div className="project__header">
          <div ref={imageHeaderRef} className="image-header-container">
            <img src={currentImage} alt="" />
          </div>
        </div>

        <div ref={titleDescriptionRef} className="project__description__container">
          <ProjectDescription project={project} />
        </div>

        <div ref={titleProjectRef} className="project__image__container">
          <ProjectList />
        </div>

        <div className="project-next-previous">
          <div className="buttons">
            <Button text="Précédent" onClick={handlePreviousClick} />
            <Button text="Suivant" onClick={handleNextClick} />
          </div>
        </div>

        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default transitionTop(Project); // Export du composant avec un effet de transition du haut vers le bas
