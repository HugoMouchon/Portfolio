// Utilisation de la dépendance 'Gsap' qui permet de créer des animations
import gsap from 'gsap';

// Animation de l'image "profil" pour téléphone et tablette
const fadeInProfilResponsive = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.7 }
    );
};

// Animation du titre pour téléphone et tablette
const fadeInTitleResponsive = (element) => {
    gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 1 }
    );
};

// Animation de la présentation pour téléphone et tablette
const fadeInPresentationResponsive = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 1.4 }
    );
};

// Animation du lien pour télécharger le Curriculum Vitae pour téléphone et tablette
const fadeInCvResponsive = (element) => {
    gsap.fromTo(
        element,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 1.6 }
    );
};


export { fadeInTitleResponsive, fadeInCvResponsive, fadeInPresentationResponsive, fadeInProfilResponsive };