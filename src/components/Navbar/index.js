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
const Navbar = ({ views }) => (
  <nav id="navbar">
    {views.map(view => (
      <NavLink
        key={view.id}
        to={view.path}
        className="navbar-link"
        activeClassName="navbar-link--active"
        exact
      >
        {view.name}
      </NavLink>
    ))}
  </nav>
);

Navbar.propTypes = {
  views: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Export
 */
export default Navbar;
