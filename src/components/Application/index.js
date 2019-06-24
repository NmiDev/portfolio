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
import Footer from 'Components/Footer';
// Views
import Home from 'Containers/Home';
import Contact from 'Components/Contact';
import NoMatch from 'Components/NoMatch';

/**
 * Code
 */
class Application extends React.Component {
  componentDidMount() {
    // Catch the vh value and convert in unit
    let vh = window.innerHeight * 0.01;

    // Set our own property with vh, usefull for all the app
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Listening the rezising and set new vh if it's necessary
    window.addEventListener('resize', () => {
      // We execute the same script as before
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  render() {
    return (
      <div id="application">
        {/* Header */}
        <Header />

        {/* Main with routes */}
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

        {/* Footer */}
        <Footer />

      </div>
    );
  }
}

/**
 * Exports
 */
export default Application;
