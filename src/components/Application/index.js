/**
 * NPM imports
 */
import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Local imports
 */
// Styles
import './application.scss';
// Components
import Header from 'Components/Header';
import Home from 'Components/Home';
import Contact from 'Components/Contact';

/**
 * Code
 */
const Application = () => (
  <div id="application">

    <Header />

    <main>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
    </main>

  </div>
);

/**
 * Exports
 */
export default Application;
