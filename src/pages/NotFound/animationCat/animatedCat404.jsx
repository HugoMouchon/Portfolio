import React from 'react';
import Lottie from 'lottie-react';
import animationData from './404Cat.json';

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
