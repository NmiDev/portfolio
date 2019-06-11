/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
import './navbar.scss';

/**
 * Code
 */
const Navbar = ({ navlinks }) => (
  <nav id="navbar">
    {navlinks.map(navlink => (
      <a
        href={navlink.href}
        className="navbar-link"
        key={navlink.id}
      >
        {navlink.name}
      </a>
    ))}
  </nav>
);

Navbar.propTypes = {
  navlinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Export
 */
export default Navbar;
