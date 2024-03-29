import gsap from 'gsap';

// Animation du titre "Projets"
const fadeInHeadTitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.1 }
    );
};

// Animation du trait séparateur du titre
const fadeInHeadSeparator = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.1 }
    );
};

// Animation du lien projet "Pokedex"
const fadeInProjectPokedex = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
    );
};

// Animation du trait séparateur pokedex
const fadeInPokedexSeparator = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
    );
};


// Animation du lien projet "Watowatch"
const fadeInProjectWatowatch = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.4 }
    );
};

// Animation du trait séparateur watowatch
const fadeInWatowatchSeparator = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.4 }
    );
};

// Animation du lien projet "Brand"
const fadeInProjectBrand = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.5 }
    );
};

// Animation du trait séparateur brand
const fadeInBrandSeparator = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.5 }
    );
};

// Animation du lien projet "Ioprod"
const fadeInProjectIoprod = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.6 }
    );
};

// Animation du trait séparateur ioprod
const fadeInIoprodSeparator = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.6 }
    );
};

// Animation du lien projet "Wedding"
const fadeInProjectWedding = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.7 }
    );
};

// Animation du trait séparateur wedding
const fadeInWeddingSeparator = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.7 }
    );
};

// Animation d'apparation des images de gauche à droite lors du hover des liens de chaques projets
const animateImageFromLeftToRight = (element) => {
    gsap.fromTo(
        element,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' }
    );
}

export { fadeInHeadTitle, fadeInHeadSeparator, fadeInProjectPokedex, fadeInProjectWatowatch, fadeInProjectBrand, fadeInProjectIoprod, fadeInProjectWedding, fadeInPokedexSeparator, fadeInWatowatchSeparator, fadeInBrandSeparator, fadeInIoprodSeparator, fadeInWeddingSeparator, animateImageFromLeftToRight };