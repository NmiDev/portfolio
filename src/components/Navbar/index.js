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
const Navbar = ({ routes }) => (
  <nav id="navbar">
    {Object.keys(routes).map(route => (
      <NavLink
        key={route}
        to={route}
        className="navbar-link"
        activeClassName="navbar-link--active"
        exact
      >
        {routes[route].name}
      </NavLink>
    ))}
  </nav>
);

Navbar.propTypes = {
  routes: PropTypes.objectOf(PropTypes.object).isRequired,
};

/**
 * Export
 */
export default Navbar;
