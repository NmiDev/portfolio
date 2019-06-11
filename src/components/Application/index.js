/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './application.scss';
// Components
import Header from 'Components/Header';
import Home from 'Components/Home';

/**
 * Code
 */
const Application = () => (
  <div id="application">
    <Header />

    <main>
      <Home />
    </main>
  </div>
);

/**
 * Exports
 */
export default Application;
