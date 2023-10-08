import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="60" viewBox="0 0 300 60">
      <motion.g initial={{ opacity: 1 }}>
        <motion.text
          x="10"
          y="40"
          fontFamily="Arial, sans-serif"
          fontSize="30"
          fontWeight="100"
          fill="white"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.tspan
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            H.
          </motion.tspan>
        </motion.text>
      </motion.g>
      <motion.g initial={{ opacity: 1 }}>
        <motion.text
          x="40"
          y="40"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="100"
          fill="white"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.tspan
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            M
          </motion.tspan>
        </motion.text>
      </motion.g>
    </svg>
  );
};

export default Logo;
