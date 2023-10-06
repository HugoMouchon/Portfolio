import React, { useEffect, useRef } from "react";
import './apropos.scss';
import profil from '../../img/moi.png'
import Navbar from '../../components/Navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { fadeInCv, fadeInPresentation, fadeInProfil, fadeInTitle } from "./animationDesktop";
import { fadeInCvResponsive, fadeInPresentationResponsive, fadeInProfilResponsive, fadeInTitleResponsive } from "./animationTablet&Phone";
import cv from '../../img/cv_mouchon_hugo.pdf'
import transitionRight from "../../animation/transitionRight";

function Apropos() {
    const cvRef = useRef(null);
    const presentationRef = useRef(null);
    const titreRef = useRef(null);
    const profilRef = useRef(null);

    const isTablet = window.innerWidth <= 768;
    const isPhone = window.innerWidth <= 480;


    useEffect(() => {
        const cvElement = cvRef.current;
        const presentationElement = presentationRef.current;
        const titreElement = titreRef.current;
        const profilElement = profilRef.current;

        if (isTablet || isPhone) {

            fadeInProfilResponsive(profilElement);
            fadeInTitleResponsive(titreElement);
            fadeInPresentationResponsive(presentationElement);
            fadeInCvResponsive(cvElement);

        } else {

            fadeInTitle(titreElement);
            fadeInPresentation(presentationElement);
            fadeInProfil(profilElement);
            fadeInCv(cvElement);
        }

    }, [isTablet, isPhone]);

    return (
        <section className="container">
            <Navbar />
            <div className="presentation">

                <h3 ref={titreRef}>À Propos de moi</h3>

                <p ref={presentationRef}>Je me présente, je m'appelle MOUCHON Hugo......HOP HOP HOP 🤚🛑 <br />
                    Pour vous lecteur attentionné, ce que vous vous apprêtez à lire ici n'est pas la biographie du meilleur codeur sachant coder avec spécialement le petit orteil de pied et contre tout attente, je ne maitrise pas non plus 38 languages de programmation, cependant je suis bel est bien un futur candidat serviable, calme et dévoué et je ne vais pas vous expliquez pourquoi je suis mais plutôt qui je suis.<br /><br />

                    J'ai une appétence particulière pour le 7ème art, notamment pour ses bandes originales dont je me noie les oreilles abondamment lors de mes sessions de codage ou lors de sessions de nettoyage à la #MmeDoubtfire <br /><br />

                    Denis Villeneuve, Guy Ritchie, Christopher Nolan, Bong Joon-ho, Martin McDonagh, David Fincher... si ces noms te parlent alors nous venons du même univers, sinon je serais ravi de vous convaincre de regarder quelques chefs d'oeuvres parmi ces grands noms. <a className="snatch" href="https://www.allocine.fr/film/fichefilm_gen_cfilm=26251.html" target="blank">Comme Snatch par exemple</a>

                    <br /><br />Comme souvent avec les développeurs / geeks, je suis né avec les jeux vidéo ! Au dela de toute mauvaise croyance, cet art m'a beaucoup apporté et m'apporte toujours autant.  <br /> En fin de compte, je suis quelqu'un qui croit en la capacité de l'être humain à s'améliorer, et je pense que nos divers univers individuels devraient nous rapprocher les uns des autres.<br />

                    <br /> #VousVoulezUnWhisky?

                </p>

                <a ref={cvRef} href={cv} className="cv-link" download target="blank">
                    <FontAwesomeIcon icon={faFileArrowDown} className="icon" /> Curriculum vitae
                </a>
            </div>

            <div ref={profilRef} className="profil">
                <img src={profil} alt="profil de Hugo MOUCHON,jeune développeur web spécialisé dans le front-end" />
            </div>
        </section>
    );
}

export default transitionRight(Apropos);
