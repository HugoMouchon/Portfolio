// Utilisation de la dépendance 'Gsap' qui permet de créer des animations
import gsap from 'gsap';


// Animation du titre
const fadeInTitle = (element) => {
    gsap.fromTo(
        element,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.6 }
    );
};

// Animation du paragraphe "description"
const fadeInPresentation = (element) => {
    gsap.fromTo(
        element,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.9 }
    );
};

// Animation de l'image profil
const fadeInProfil = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.9 }
    );
};

// Animation de lien de téléchargement de mon CV
const fadeInCv = (element) => {
    gsap.fromTo(
        element,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1 }
    );
};


export { fadeInTitle, fadeInCv, fadeInPresentation, fadeInProfil };