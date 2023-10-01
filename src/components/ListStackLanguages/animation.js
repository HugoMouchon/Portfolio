import gsap from 'gsap';

// Animation de l'icone HTML
const fadeInHtml = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.6 }
    );
};

// Animation de l'icone CSS
const fadeInCss = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.7 }
    );
};

// Animation de l'icone SASS
const fadeInSass = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.8 }
    );
};

// Animation de l'icone JS
const fadeInJs = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.9 }
    );
};

// Animation de l'icone REACT
const fadeInReact = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 1 }
    );
};

// Animation de l'icone WORDPRESS
const fadeInWordpress = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 1.1 }
    );
};

// Animation de l'icone GITHUb
const fadeInGithub = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 1.2 }
    );
};

export { fadeInHtml, fadeInCss, fadeInSass, fadeInJs, fadeInReact, fadeInWordpress, fadeInGithub };