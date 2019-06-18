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
// Components
import Copyright from 'Components/Copyright';

/**
 * Code
 */
const NoMatch = () => (
  <div id="nomatch">
    <div className="nomatch-alert">
      <p className="nomatch-alert-message">
        Vous faites fausse route !
      </p>
      <NavLink
        to="/"
        className="nomatch-alert-redirect"
        exact
      >
        Retrouvez la lumière ...
      </NavLink>
    </div>
    <Copyright />
  </div>
);

/**
 * Export
 */
export default NoMatch;
