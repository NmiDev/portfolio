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
      Tu fais fausse route.
    </p>

    <NavLink
      to="/"
      className="nomatch-redirect"
      exact
    >
      <span className="nomatch-redirect-container">
        Retrouve la lumière!
      </span>
    </NavLink>

  </div>
);

/**
 * Export
 */
export default NoMatch;
