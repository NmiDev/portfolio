/**
 * NPM imports
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local imports
 */
// Styles
import './application.scss';
// Components
import Header from 'Components/Header';
import Home from 'Containers/Home';
import Contact from 'Components/Contact';
import NoMatch from 'Components/NoMatch';
import Footer from 'Components/Footer';

/**
 * Code
 */
const Application = () => (
  <div id="application">
    {/* Header */}
    <Header />

    {/* Main with routes */}
    <main>
      <Switch>
        {/* Home view */}
        <Route path="/" exact render={() => (<Home />)} />
        {/* Contact view */}
        <Route path="/contact" render={() => (<Contact />)} />
        {/* No match */}
        <Route render={() => (<NoMatch />)} />
      </Switch>
    </main>

    {/* Footer */}
    <Footer />

  </div>
);

/**
 * Exports
 */
export default Application;
