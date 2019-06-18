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

    <Footer />

  </div>
);

/**
 * Exports
 */
export default Application;
