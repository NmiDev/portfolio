/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
      <NavLink
        to={navlink.href}
        className="navbar-link"
        key={navlink.id}
        activeClassName="navbar-link-active"
        exact
      >
        {navlink.name}
      </NavLink>
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
