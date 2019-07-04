/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    routes: PropTypes.objectOf(PropTypes.object).isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    // Catch the value from props
    const { history, location } = this.props;
    // Set the initial custom title
    this.setCustomTitle(location);
    // Set the initial custom height value
    this.setCustomHeight();
    // Listener for route change and upadte title
    history.listen(this.setCustomTitle);
    // Listener for resizing and update property --vh
    window.addEventListener('resize', this.setCustomHeight);
  }

  setCustomHeight = () => {
    // Catch the vh value and convert in unit
    const vh = window.innerHeight * 0.01;
    // Set our own property with this vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setCustomTitle = ({ pathname }) => {
    // Catch the value from props
    const { routes } = this.props;
    // Init titleValue
    let titleValue;
    // Check if the route exist in routes
    if (pathname in routes) {
      // Set the title
      titleValue = routes[pathname].title;
    } else {
      // Set the fallback title, noMatch
      titleValue = 'NmiDev - Red pill or Blue pill ?';
    }
    // Set the page title
    document.title = titleValue;
  };

  render() {
    // Catch what I need from the props
    const { routes } = this.props;
    // Correlation between route name and Component
    const views = {
      Home,
      Contact,
    };

    return (
      <div id="application">
        {/* Header */}
        <Header />

        {/* Main with routes */}
        <main>
          <Switch>
            {/* Maps all routes */}
            {Object.keys(routes).map(route => (
              <Route
                exact
                key={route}
                path={route}
                component={views[routes[route].component]}
              />
            ))}

            {/* Route with no match */}
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
