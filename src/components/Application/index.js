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
// Utils
import setCustomHeight from 'Utils/tools';
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
    // Set the initial custom height value
    setCustomHeight();
    // Resizing listener and update the custom property the --vh
    window.addEventListener('resize', setCustomHeight);
  }

  render() {
    return (
      <div id="application">
        {/* Header */}
        <Header />

        {/* Main with routes */}
        <main>
          <Switch>
            {/* Home */}
            <Route path="/" exact component={Home} />
            {/* Contact */}
            <Route path="/contact" component={Contact} />

            {/* Path with no match */}
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
