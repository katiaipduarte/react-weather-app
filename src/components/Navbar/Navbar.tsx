import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { NavbarContainer } from './Navbar.style';

const Navbar = () => {
  const [seeMobileMenu, setSeeMobileMenu] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <ul className={seeMobileMenu ? 'menu active' : 'menu'}>
        <li className="logo">
          <Link to="/">Weather App</Link>
        </li>
        <li className="item">
          <Link to="/current-location">Current Location</Link>
        </li>
        <li className="item">
          <Link to="/favourites">Favourites</Link>
        </li>
        <li className="toggle">
          <a aria-label="Click to open mobile menu" onClick={() => setSeeMobileMenu(!seeMobileMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
