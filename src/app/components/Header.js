import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <nav className="nav-wrapper">
    <a href="/" className="brand-logo">
      Logo
    </a>
    <ul className="right">
      <li>
        <a href="/">{props.homeLink}</a>
      </li>
    </ul>
  </nav>
);

Header.propTypes = {
  homeLink: PropTypes.string.isRequired,
};

export default Header;
