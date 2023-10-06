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
import transitionCenter from "../../animation/transitionCenter";
import { fadeInImageHeader, fadeInTitleDescription, fadeInDescription, fadeInTitleProject, fadeInImageProject } from "./animation";
import Button from "../../components/Button/button";


function Project() {
  const { name } = useParams();

  const imageHeaderRef = useRef(null);
  const titleDescriptionRef = useRef(null);
  const descriptionProjectRef = useRef(null);
  const titleProjectRef = useRef(null);
  const imageProjectRef = useRef(null);

  useEffect(() => {
    const animateElement = (element, animation) => {
      if (element && animation) {
        animation(element);
      }
    };

    animateElement(imageHeaderRef.current, fadeInImageHeader);
    animateElement(titleDescriptionRef.current, fadeInTitleDescription);
    animateElement(descriptionProjectRef.current, fadeInDescription);
    animateElement(titleProjectRef.current, fadeInTitleProject);
    animateElement(imageProjectRef.current, fadeInImageProject);
  }, []);

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

  const projects = Object.keys(projectData); // Obtenez la liste de tous les projets
  const currentIndex = projects.indexOf(name); // Trouvez l'index du projet actuel

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

export default transitionCenter(Project);
