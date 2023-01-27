import React from 'react';
import './header.scss';
import arbreHeader from '../../img/treeHeader2.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={arbreHeader} alt="" />
      </div>
    </header>
  );
};

export default Header;