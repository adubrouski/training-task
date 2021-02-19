import React from 'react';

import DropArea from './DropArea/DropArea.jsx';

import './Header.sass';

const Header = () => {
  return (
    <header className="header">
      <div className="header__navbar">
        <div className="header__search">
          <input
            type="text"
            placeholder="Enter your request"
            className="header__searchbar"
            maxLength="70"
          />
        </div>
        <button className="header__button">Login</button>
      </div>
      <DropArea />
    </header>
  );
};

export default Header;
