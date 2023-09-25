import gsap from 'gsap';

// Animation de la card ItemCountry
const fadeInTitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.1 }
    );
};

// Animation du text continent
const fadeInSubtitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
    );
};

// Animation du nom du pays
const fadeInSubtitle2 = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
    );
};

// Animation du texte "langues parlées"
const fadeInPropos = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.4 }
    );
};

// Animation de la liste de langues
const fadeInProjet = (element) => {
    gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
};

const zoomInAndOut = (element) => {
    gsap.fromTo(
      element,
      { scale: 1.5 }, // Zoom avant léger
      { scale: 1, duration: 2, ease: 'power2.inOut'}
    );
  };

export { fadeInTitle, fadeInSubtitle, fadeInSubtitle2, fadeInPropos, fadeInProjet, zoomInAndOut };