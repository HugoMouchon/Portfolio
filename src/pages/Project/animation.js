import gsap from 'gsap';

// Fonction générique pour les animations
const animateElement = (element, props) => {
    gsap.fromTo(
        element,
        { ...props.from },
        { ...props.to, duration: 0.5, ease: 'power2.out', delay: props.delay }
    );
};

// Animation du titre
const fadeInImageHeader = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.3 });
};


// Animation du titre
const fadeInTitleDescription = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.4 });
};

// Animation du sous-titre
const fadeInDescription = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.4 });
};

// Animation du deuxième sous-titre
const fadeInTitleProject = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.4 });
};

// Animation du lien à propos
const fadeInImageProject = (element) => {
    animateElement(element, { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.5 });
};

export { fadeInImageHeader, fadeInTitleDescription, fadeInDescription, fadeInTitleProject, fadeInImageProject };
