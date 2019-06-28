/**
 * NPM imports
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Pill from '../../assets/pill.svg';

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
      Tu fais fausse route
    </p>

    <NavLink
      to="/"
      className="nomatch-redirect"
      exact
    >
      <span className="nomatch-redirect-container">
        Choisis la pilule rouge <img src={Pill} alt="Try the red pill to meet Alice's Adventures in Wonderland" />
      </span>
    </NavLink>

  </div>
);

/**
 * Export
 */
export default NoMatch;
