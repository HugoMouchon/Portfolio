import React, { useEffect, useRef } from 'react'
import "./listStackLanguages.scss"
import css from "../../img/icones/css.svg";
import github from "../../img/icones/github.svg";
import html from "../../img/icones/html.svg";
import js from "../../img/icones/js.svg";
import react from "../../img/icones/react.svg";
import sass from "../../img/icones/sass.svg";
import wordpress from "../../img/icones/wordpress.svg";
import { fadeInCss, fadeInGithub, fadeInHtml, fadeInJs, fadeInReact, fadeInSass, fadeInWordpress } from './animation';

export default function ListStackLanguages() {

    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const sassRef = useRef(null);
    const jsRef = useRef(null);
    const reactRef = useRef(null);
    const wordpressRef = useRef(null);
    const githubRef = useRef(null);


    useEffect(() => {
        const htmlElement = htmlRef.current;
        const cssElement = cssRef.current;
        const sassElement = sassRef.current;
        const jsElement = jsRef.current;
        const reactElement = reactRef.current;
        const wordpressElement = wordpressRef.current;
        const githubElement = githubRef.current;

        fadeInHtml(htmlElement);
        fadeInCss(cssElement);
        fadeInSass(sassElement);
        fadeInJs(jsElement);
        fadeInReact(reactElement);
        fadeInWordpress(wordpressElement);
        fadeInGithub(githubElement);
    })

    return (
        <div className='list_languages'>
            <img ref={htmlRef} className='language-icon' src={html} alt="icone html" />
            <img ref={cssRef} className='language-icon' src={css} alt="icone css" />
            <img ref={sassRef} className='language-icon' src={sass} alt="icone sass" />
            <img ref={jsRef} className='language-icon' src={js} alt="icone javascript" />
            <img ref={reactRef} className='language-icon' src={react} alt="icone react" />
            <img ref={wordpressRef} className='language-icon' src={wordpress} alt="icone wordpress" />
            <img ref={githubRef} className='language-icon' src={github} alt="icone github" />
        </div>
    )
}
