import React, { useEffect, useRef } from 'react';
import "./listStackLanguages.scss";
import css from "../../icones/css.svg";
import github from "../../icones/github.svg";
import html from "../../icones/html.svg";
import js from "../../icones/js.svg";
import react from "../../icones/react.svg";
import sass from "../../icones/sass.svg";
import wordpress from "../../icones/wordpress.svg";
import { fadeInCss, fadeInGithub, fadeInHtml, fadeInJs, fadeInReact, fadeInSass, fadeInWordpress } from './animation';


export default function ListStackLanguages() {
    // Références pour les éléments HTML afin de les animer
    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const sassRef = useRef(null);
    const jsRef = useRef(null);
    const reactRef = useRef(null);
    const wordpressRef = useRef(null);
    const githubRef = useRef(null);

    // Utilisation de useEffect pour déclencher les animations lorsque le composant est monté
    useEffect(() => {
        // Obtention des éléments HTML à partir des références
        const htmlElement = htmlRef.current;
        const cssElement = cssRef.current;
        const sassElement = sassRef.current;
        const jsElement = jsRef.current;
        const reactElement = reactRef.current;
        const wordpressElement = wordpressRef.current;
        const githubElement = githubRef.current;

        // Appel des fonctions d'animation pour chaque élément
        fadeInHtml(htmlElement);
        fadeInCss(cssElement);
        fadeInSass(sassElement);
        fadeInJs(jsElement);
        fadeInReact(reactElement);
        fadeInWordpress(wordpressElement);
        fadeInGithub(githubElement);
    }, []);

    return (
        <div className='list_languages'>
            {/* Icones des différents language de programmation */}
            <img ref={htmlRef} className='language-icon' src={html} alt="icone html" />
            <img ref={cssRef} className='language-icon' src={css} alt="icone css" />
            <img ref={sassRef} className='language-icon' src={sass} alt="icone sass" />
            <img ref={jsRef} className='language-icon' src={js} alt="icone javascript" />
            <img ref={reactRef} className='language-icon' src={react} alt="icone react" />
            <img ref={wordpressRef} className='language-icon' src={wordpress} alt="icone wordpress" />
            <img ref={githubRef} className='language-icon' src={github} alt="icone github" />
        </div>
    );
}
