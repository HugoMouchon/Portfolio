import gsap from 'gsap';


// Animation du nom du pays
const fadeInTitle = (element) => {
    gsap.fromTo(
        element,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.6 }
    );
};

// Animation du text continent
const fadeInPresentation = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.9 }
    );
};

// Animation du texte "langues parlées"
const fadeInProfil = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.8 }
    );
};

// Animation de la card ItemCountry
const fadeInCv = (element) => {
    gsap.fromTo(
        element,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1 }
    );
};


export { fadeInTitle, fadeInCv, fadeInPresentation, fadeInProfil };