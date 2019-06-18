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
import Home from 'Components/Home';
import Contact from 'Components/Contact';
import NoMatch from 'Components/NoMatch';

/**
 * Code
 */
const Application = () => (
  <div id="application">

    <Header />

    <main>
      <Switch>
        {/* Home view */}
        <Route path="/" exact component={Home} />
        {/* Contact view */}
        <Route path="/contact" component={Contact} />
        {/* No match */}
        <Route component={NoMatch} />
      </Switch>
    </main>

  </div>
);

/**
 * Exports
 */
export default Application;
