import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
