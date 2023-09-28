import React, { useEffect, useRef, useState } from "react";
import "./menuProjects.scss";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import transitionLeft from "../../Animation/transitionLeft";
import pokemon from "../../img/pokemon.jpg";
import cinema from "../../img/cinema.jpg";
import countries from "../../img/countries.jpg";
import ioprod from "../../img/ioprod.jpg";
import wedding from "../../img/wedding.jpg";
import { fadeInHeadTitle, fadeInHeadSeparator, fadeInProjectPokedex, fadeInProjectWatowatch, fadeInProjectBrand, fadeInProjectIoprod, fadeInProjectWedding, fadeInPokedexSeparator, fadeInWatowatchSeparator, fadeInBrandSeparator, fadeInIoprodSeparator, fadeInWeddingSeparator, animateImageFromLeftToRight } from './animation';

function MenuProjects() {
  const [showPokemonImage, setShowPokemonImage] = useState(false);
  const [showCinemaImage, setShowCinemaImage] = useState(false);
  const [showBrandImage, setShowBrandImage] = useState(false);
  const [showIoprodImage, setShowIoprodImage] = useState(false);
  const [showWeddingImage, setShowWeddingImage] = useState(false);

  const handleMouseEnter = (imageSetter) => {
    imageSetter(true);
  };

  const handleMouseLeave = (imageSetter) => {
    imageSetter(false);
  };


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

  useEffect(() => {
    const projectLeftImageElement = projectLeftImageRef.current;
    // Utilisez la fonction d'animation pour animer l'image
    animateImageFromLeftToRight(projectLeftImageElement);
  });

  return (
    <div className="menu-projects">
      <Navbar />
      <div className="menu-projects-container">
        <div className="project__container">
          <div className="project__left">

            <div

              className="projects-image">
              {showPokemonImage ? (<img ref={projectLeftImageRef} src={pokemon} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="projects-image">
              {showCinemaImage ? (<img ref={projectLeftImageRef} src={cinema} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="projects-image">
              {showBrandImage ? (<img ref={projectLeftImageRef} src={countries} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="projects-image">
              {showIoprodImage ? (<img ref={projectLeftImageRef} src={ioprod} alt="" />) : ""}
            </div>

            <div
              ref={projectLeftImageRef}
              className="projects-image">
              {showWeddingImage ? (<img ref={projectLeftImageRef} src={wedding} alt="" />) : ""}
            </div>
          </div>

          <div className="project__right">
            <div>
              <div className="page-head">
                <div ref={headTitleRef} className="page-title">
                  <h1>Projets</h1>
                </div>
                <hr ref={headSeparatorTitleRef} className="head-separator" />
              </div>
            </div>
            <ul ref={projectPokedexRef}>
              <a
                href="pokedex"
                onMouseEnter={() => handleMouseEnter(setShowPokemonImage)}
                onMouseLeave={() => handleMouseLeave(setShowPokemonImage)} s
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">Pokedex</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Développement Web</p>
                  </div>
                </div>
              </a>
            </ul>
            <hr ref={headSeparatorPokedexRef} className="head-separator" />

            <ul ref={projectWatowatchRef}>
              <a
                href="cinema"
                onMouseEnter={() => handleMouseEnter(setShowCinemaImage)}
                onMouseLeave={() => handleMouseLeave(setShowCinemaImage)} s
              >
                <div className="projects-row">
                  <div className="projects-row-left">
                    <h4 className="project-title">Watowatch</h4>
                  </div>
                  <div className="projects-row-right">
                    <p className="project-category"> Développement Web</p>
                  </div>
                </div>
              </a>
            </ul>
            <hr ref={headSeparatorWatowatchRef} className="head-separator" />

            <ul ref={projectBrandRef}>
              <a
                href="brand"
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
              </a>
            </ul>
            <hr ref={headSeparatorBrandRef} className="head-separator" />

            <ul ref={projectIoprodRef}>
              <a
                href="pokedex"
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
              </a>
            </ul>
            <hr ref={headSeparatorIoprodRef} className="head-separator" />

            <ul ref={projectWeddingRef}>
              <a
                href="pokedex"
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
              </a>
            </ul>
            <hr ref={headSeparatorWeddingRef} className="head-separator" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default transitionLeft(MenuProjects);
