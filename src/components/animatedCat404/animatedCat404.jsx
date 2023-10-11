import React from 'react';
import Lottie from 'lottie-react';
import animationData from './404Cat.json';

// Composant qui permet d'afficher une animation sur la page 'NotFound', ce composant utilise la dépendance Lottie
function AnimatedCat404() {
  return (
    <>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ height: '700px', width: '700px'}}
      />
    </>
  );
}

export default AnimatedCat404;
