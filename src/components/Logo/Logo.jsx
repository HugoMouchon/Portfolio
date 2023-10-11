import React from 'react';
import './logo.scss';
import logoHM from '../../img/logoHM.svg';

export default function Logo() {
  return (
    <div className="logo-container">
      <img className="logo" src={logoHM} alt="Logo HM" />
    </div>
  );  
}
