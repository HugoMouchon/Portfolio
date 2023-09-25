import React, { useEffect, useRef } from "react";
import './apropos.scss';
import profil from '../../img/moi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { fadeInCard, fadeInCv, fadeInLanguages, fadeInPresentation, fadeInProfil, fadeInRegion, fadeInTitle } from "./animation";
import cv from '../../img/cv_mouchon_hugo.pdf'
import transitionRight from "../../Animation/transitionRight";

function Apropos() {

    const cvRef = useRef(null);
    const presentationRef = useRef(null);
    const titreRef = useRef(null);

    const profilRef = useRef(null);


    useEffect(() => {
        const cvElement = cvRef.current;
        const presentationElement = presentationRef.current;
        const titreElement = titreRef.current;

        const profilElement = profilRef.current;

        fadeInTitle(titreElement);
        fadeInPresentation(presentationElement);
        fadeInProfil(profilElement);
        fadeInCv(cvElement);
    })

    return (
        <section className="container">

            <div className="presentation">

                <h3 ref={titreRef}>À Propos de moi</h3>

                <p ref={presentationRef}>Je me présente, je m'appelle MOUCHON Hugo......HOP HOP HOP 🤚🛑 <br />
                    Pour vous lecteur attentionné, ce que vous vous apprêtez à lire ici n'est pas la biographie du meilleur codeur sachant coder spécialement avec le petit orteil de pied, je ne maitrise pas non plus 38 languages de programmation parcontre je suis bel est bien un candidat serviable, calme et attentionné.<br />
                    Une personne qui croit en ce que l'être humain est capable de mieux et qui respecte l'autre.<br />
                    Alors bien sûr, comme tous les développeurs / geeks, je suis un peu perché ! Mais je l'assume et j'en tire ma force. <br /> #MayTheForceBeWithYou  </p>

                <a ref={cvRef} href={cv} className="cv-link" download target="blank">
                    <FontAwesomeIcon icon={faFileArrowDown} className="icon" /> Télécharger mon CV
                </a>
            </div>

            <div ref={profilRef} className="profil">
                <img src={profil} alt="photo de profil de Hugo MOUCHON, jeune développeur web" />
            </div>
        </section>
    );
}

export default transitionRight(Apropos);
