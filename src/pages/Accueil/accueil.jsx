import React, { useEffect, useRef } from 'react';
import './accueil.scss';
import video from '../../video/foret.mp4';
import Navbar from '../../components/Navbar/navbar';
import { Link } from 'react-router-dom';
import { fadeInProjet, fadeInPropos, fadeInSubtitle, fadeInSubtitle2, fadeInTitle, zoomInAndOut } from './animation';
import ListStackLanguages from '../../components/ListStackLanguages/listStackLanguages';


function Accueil() {
    const videoElementRef = useRef(null);
    const titreElementRef = useRef(null);
    const sousTitreElementRef = useRef(null);
    const sousTitre2ElementRef = useRef(null);
    const projetElementRef = useRef(null);
    const proposElementRef = useRef(null);

    useEffect(() => {
        const animateElement = (element, animation) => {
            if (element && animation) {
                animation(element);
            }
        };

        animateElement(videoElementRef.current, zoomInAndOut);
        animateElement(titreElementRef.current, fadeInTitle);
        animateElement(sousTitreElementRef.current, fadeInSubtitle);
        animateElement(sousTitre2ElementRef.current, fadeInSubtitle2);
        animateElement(projetElementRef.current, fadeInProjet);
        animateElement(proposElementRef.current, fadeInPropos);
    }, []);

    return (
        <header className="header">
            <Navbar />
            <div className="header__content">
                <div className='video-filter'>
                    <div className="video-container">
                        <video ref={videoElementRef} autoPlay muted loop src={video}></video>
                    </div>
                </div>

                <div className="titre">
                    <div>
                        <h1 ref={titreElementRef}>Salut, je suis Hugo Mouchon <br /></h1>
                        <p ref={sousTitreElementRef} className='sous-titre'>mais tu peux m'appeler Hug's</p>
                        <p ref={sousTitre2ElementRef}>Je suis Développeur Front-End Junior</p>
                    </div>
                    <ListStackLanguages />
                </div>

                <div className="header__projects">
                    <p><Link to="/Menu-Projects" className='title-projet' ref={projetElementRef}>Voir mes projets</Link></p>
                    <p><Link to="/A-Propos-De-Moi" className='title-propos' ref={proposElementRef}>En savoir plus sur moi</Link></p>
                </div>
            </div>
        </header>
    );
}

export default Accueil;
