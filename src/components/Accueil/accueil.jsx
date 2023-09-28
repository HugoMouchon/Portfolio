import React, { useEffect, useRef } from 'react';
import './accueil.scss';
import video from '../../video/foret.mp4';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';
import { fadeInProjet, fadeInPropos, fadeInSubtitle, fadeInSubtitle2, fadeInTitle, zoomInAndOut } from './animation';
import ListStackLanguages from '../List-Stack-Languages/listStackLanguages';

export function Accueil() {

    const videoRef = useRef(null);
    const titreRef = useRef(null);
    const sousTitreRef = useRef(null);
    const sousTitre2Ref = useRef(null);
    const projetRef = useRef(null);
    const proposRef = useRef(null);

    useEffect(() => {

        const videoElement = videoRef.current;
        const titreElement = titreRef.current;
        const sousTitreElement = sousTitreRef.current;
        const sousTitre2Element = sousTitre2Ref.current;
        const projetElement = projetRef.current;
        const proposElement = proposRef.current;

        zoomInAndOut(videoElement);
        fadeInTitle(titreElement);
        fadeInSubtitle(sousTitreElement);
        fadeInSubtitle2(sousTitre2Element);
        fadeInProjet(projetElement);
        fadeInPropos(proposElement);
    })

    return (
        <header className="header">
            <Navbar />
            <div className="header__content">
                <div className='video-filter'>
                    <div className="video-container"> {/* Ajoutez un conteneur pour la vidéo */}
                        <video ref={videoRef} autoPlay muted loop src={video}></video>
                    </div>
                </div>

                <div className="titre">
                    <div>
                        <h1 ref={titreRef}>Salut, je suis Hugo Mouchon <br /></h1>
                        <p ref={sousTitreRef} className='sous-titre'>mais tu peux m'appeler Hug's</p>
                        <p ref={sousTitre2Ref}>Je suis Développeur Front-End Junior</p>
                    </div>
                    <ListStackLanguages />
                </div>

                <div className="header__projects">
                    <p><Link to="/Menu-Projects" className='title-projet' ref={projetRef}>Voir mes projets</Link></p>
                    <p ><Link to="/A-Propos-De-Moi" className='title-propos' ref={proposRef}>En savoir plus sur moi</Link></p>
                </div>
            </div>
        </header>
    );
};

export default (Accueil)
