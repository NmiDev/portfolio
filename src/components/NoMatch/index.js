/**
 * NPM imports
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Styles
import './nomatch.scss';

/**
 * Code
 */
const NoMatch = () => (
  <div id="nomatch">

    <p className="nomatch-alert">
      Vous faites fausse route !
    </p>

    <NavLink
      to="/"
      className="nomatch-redirect"
      exact
    >
      Retrouvez la lumière ...
    </NavLink>

  </div>
);

/**
 * Export
 */
export default NoMatch;
