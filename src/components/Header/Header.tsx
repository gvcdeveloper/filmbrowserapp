import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
      <div className="header__wishlist">
        <FontAwesomeIcon icon={faEye} />
      </div>
    </header>
  );
};

export default Header;
