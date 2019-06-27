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
  static propTypes = {
    views: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    // Set the initial custom height value
    setCustomHeight();
    // Resizing listener and update the custom property the --vh
    window.addEventListener('resize', setCustomHeight);
  }

  render() {
    // Views from the state
    const { views } = this.props;
    // Components list for each views
    const componentsList = {
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
            {/* Paths from views */}
            {views.map((view) => {
              // Preparing the component for each view
              const Component = componentsList[view.name];
              // Return the path with the correct component
              return (
                <Route
                  exact
                  key={view.id}
                  path={view.path}
                  component={Component}
                />
              );
            })}

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
