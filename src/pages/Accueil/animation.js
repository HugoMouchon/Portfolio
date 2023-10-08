import gsap from 'gsap';

// Fonction générique pour les animations
const animateElement = (element, props) => {
    gsap.fromTo(
        element,
        { ...props.from },
        { ...props.to, duration: 0.4, ease: 'power2.out', delay: props.delay }
    );
};

// Animation du titre
const fadeInTitle = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.1 });
};

// Animation du sous-titre
const fadeInSubtitle = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.2 });
};

// Animation du deuxième sous-titre
const fadeInSubtitle2 = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.3 });
};

// Animation du lien voir les projets
const fadeInProjet = (element) => {
    animateElement(element, { from: { x: -125, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 1.1 });
};

// Animation du lien à propos
const fadeInPropos = (element) => {
    animateElement(element, { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 1.2 });
};

// Animation de zoom arrière de la vidéo de background
const zoomInAndOut = (element) => {
    gsap.fromTo(
        element,
        { scale: 1.5 },
        { scale: 1, duration: 2, ease: 'power2.inOut' }
    );
};

export { fadeInTitle, fadeInSubtitle, fadeInSubtitle2, fadeInPropos, fadeInProjet, zoomInAndOut };
