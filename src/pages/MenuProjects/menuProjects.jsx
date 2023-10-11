import React, { useEffect, useRef, useState } from "react"; // Importation des modules React nécessaires
import "./menuProjects.scss"; // Importation du fichier de styles
import Navbar from "../../components/Navbar/navbar"; // Importation du composant Navbar
import pokemon from "../../img/pokemon.jpg"; // Importation des images de projets
import cinema from "../../img/cinema.jpg";
import countries from "../../img/countries.jpg";
import ioprod from "../../img/ioprod.jpg";
import wedding from "../../img/wedding.jpg";
// Importation des fonctions d'animation depuis un fichier externe
import {
  fadeInHeadTitle,
  fadeInHeadSeparator,
  fadeInProjectPokedex,
  fadeInProjectWatowatch,
  fadeInProjectBrand,
  fadeInProjectIoprod,
  fadeInProjectWedding,
  fadeInPokedexSeparator,
  fadeInWatowatchSeparator,
  fadeInBrandSeparator,
  fadeInIoprodSeparator,
  fadeInWeddingSeparator,
  animateImageFromLeftToRight
} from './animation'; 
import { Link } from "react-router-dom"; // Importation du composant Link de React Router
import transitionLeft from "../../Animation/transitionLeft"; // Importation de l'effet de transition

function MenuProjects() {
  // Définition des états locaux pour contrôler l'affichage des images des projets
  const [showPokemonImage, setShowPokemonImage] = useState(false);
  const [showCinemaImage, setShowCinemaImage] = useState(false);
  const [showBrandImage, setShowBrandImage] = useState(false);
  const [showIoprodImage, setShowIoprodImage] = useState(false);
  const [showWeddingImage, setShowWeddingImage] = useState(false);

  // Fonctions pour gérer le survol de la souris et modifier les états
  const handleMouseEnter = (imageSetter) => {
    imageSetter(true);
  };

  const handleMouseLeave = (imageSetter) => {
    imageSetter(false);
  };

  // Utilisation de useRef pour accéder aux éléments du DOM
  const headTitleRef = useRef(null);
  const headSeparatorTitleRef = useRef(null);
  const headSeparatorPokedexRef = useRef(null);
  const headSeparatorWatowatchRef = useRef(null);
  const headSeparatorBrandRef = useRef(null);
  const headSeparatorIoprodRef = useRef(null);
  const headSeparatorWeddingRef = useRef(null);
  const projectPokedexRef = useRef(null);
  const projectWatowatchRef = useRef(null);
  const projectBrandRef = useRef(null);
  const projectIoprodRef = useRef(null);
  const projectWeddingRef = useRef(null);
  const projectLeftImageRef = useRef(null);

  // Premier effet : déclenche des animations lors du chargement initial de la page
  useEffect(() => {
    const headTitleElement = headTitleRef.current;
    const headSeparatorTitleElement = headSeparatorTitleRef.current;
    const headSeparatorPokedexElement = headSeparatorPokedexRef.current;
    const headSeparatorWatowatchElement = headSeparatorWatowatchRef.current;
    const headSeparatorBrandElement = headSeparatorBrandRef.current;
    const headSeparatorIoprodElement = headSeparatorIoprodRef.current;
    const headSeparatorWeddingElement = headSeparatorWeddingRef.current;
    const projectPokedexElement = projectPokedexRef.current;
    const projectWatowatchElement = projectWatowatchRef.current;
    const projectBrandElement = projectBrandRef.current;
    const projectIoprodElement = projectIoprodRef.current;
    const projectWeddingElement = projectWeddingRef.current;

    // Appel des fonctions d'animation pour chaque élément
    fadeInHeadTitle(headTitleElement);
    fadeInHeadSeparator(headSeparatorTitleElement);
    fadeInProjectPokedex(projectPokedexElement);
    fadeInProjectWatowatch(projectWatowatchElement);
    fadeInProjectBrand(projectBrandElement);
    fadeInProjectIoprod(projectIoprodElement);
    fadeInProjectWedding(projectWeddingElement);
    fadeInPokedexSeparator(headSeparatorPokedexElement);
    fadeInWatowatchSeparator(headSeparatorWatowatchElement);
    fadeInBrandSeparator(headSeparatorBrandElement);
    fadeInIoprodSeparator(headSeparatorIoprodElement);
    fadeInWeddingSeparator(headSeparatorWeddingElement);
  }, [])

  // Deuxième effet : anime l'image qui glisse de gauche à droite lors du survol de la souris
  useEffect(() => {
    const projectLeftImageElement = projectLeftImageRef.current;
    // Utilisation de la fonction d'animation pour animer l'image
    animateImageFromLeftToRight(projectLeftImageElement);
  });

  return (
    <div className="menu-projects">
      <Navbar />
      <div className="menu-projects-container">
        <div className="menu__project__container">
          <div className="menu__project__left">

            <div
              className="menu-project-image">
              {showPokemonImage ? (<img ref={projectLeftImageRef} src={pokemon} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="menu-project-image">
              {showCinemaImage ? (<img ref={projectLeftImageRef} src={cinema} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="menu-project-image">
              {showBrandImage ? (<img ref={projectLeftImageRef} src={countries} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="menu-project-image">
              {showIoprodImage ? (<img ref={projectLeftImageRef} src={ioprod} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="menu-project-image">
              {showWeddingImage ? (<img ref={projectLeftImageRef} src={wedding} alt="" />) : ""}
            </div>
          </div>

          <div className="menu__project__right">
            <div>
              <div className="page-head">
                <div ref={headTitleRef} className="page-title">
                  <h1>Projets</h1>
                </div>
                <hr ref={headSeparatorTitleRef} className="head-separator" />
              </div>
            </div>
            <ul ref={projectPokedexRef}>
              <Link
                to="/Project/Pokedex"
                onMouseEnter={() => handleMouseEnter(setShowPokemonImage)}
                onMouseLeave={() => handleMouseLeave(setShowPokemonImage)}
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">Pokedex</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Développement Web</p>
                  </div>
                </div>
              </Link>
            </ul>
            <hr ref={headSeparatorPokedexRef} className="head-separator" />

            <ul ref={projectWatowatchRef}>
              <Link
                to="/Project/Watowatch"
                onMouseEnter={() => handleMouseEnter(setShowCinemaImage)}
                onMouseLeave={() => handleMouseLeave(setShowCinemaImage)}
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">Watowatch</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Développement Web</p>
                  </div>
                </div>
              </Link>
            </ul>
            <hr ref={headSeparatorWatowatchRef} className="head-separator" />

            <ul ref={projectBrandRef}>
              <Link
                to="/Project/Brand"
                onMouseEnter={() => handleMouseEnter(setShowBrandImage)}
                onMouseLeave={() => handleMouseLeave(setShowBrandImage)} s
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">Brand</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Développement Web</p>
                  </div>
                </div>
              </Link>
            </ul>
            <hr ref={headSeparatorBrandRef} className="head-separator" />

            <ul ref={projectIoprodRef}>
              <Link
                to="/Project/Ioprod"
                onMouseEnter={() => handleMouseEnter(setShowIoprodImage)}
                onMouseLeave={() => handleMouseLeave(setShowIoprodImage)} s
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">IoProd</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Designer Web</p>
                  </div>
                </div>
              </Link>
            </ul>
            <hr ref={headSeparatorIoprodRef} className="head-separator" />

            <ul ref={projectWeddingRef}>
              <Link
                to="/Project/Wedding"
                onMouseEnter={() => handleMouseEnter(setShowWeddingImage)}
                onMouseLeave={() => handleMouseLeave(setShowWeddingImage)} s
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">Wedding's</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Illustration</p>
                  </div>
                </div>
              </Link>
            </ul>
            <hr ref={headSeparatorWeddingRef} className="head-separator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default transitionLeft(MenuProjects); // Export du composant avec un effet de transition de gauche à droite
