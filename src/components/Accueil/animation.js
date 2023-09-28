import gsap from 'gsap';

// Animation du titre
const fadeInTitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.1 }
    );
};

// Animation du sous-titre
const fadeInSubtitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
    );
};

// Animation du deuxième sous-titre
const fadeInSubtitle2 = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
    );
};

// Animation du lien à propos
const fadeInPropos = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.4 }
    );
};

// Animation du lien voir les projets
const fadeInProjet = (element) => {
    gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
};

// Animation de zoom arrière de la vidéo de background
const zoomInAndOut = (element) => {
    gsap.fromTo(
      element,
      { scale: 1.5 },
      { scale: 1, duration: 2, ease: 'power2.inOut'}
    );
  };

export { fadeInTitle, fadeInSubtitle, fadeInSubtitle2, fadeInPropos, fadeInProjet, zoomInAndOut };