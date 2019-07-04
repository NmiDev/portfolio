/* eslint-disable react/forbid-prop-types */
/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

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
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    // Check the route and update title
    this.listenRoutes();
    // Set the initial custom height value
    this.setCustomHeight();
    // Resizing listener and update the custom property the --vh
    window.addEventListener('resize', this.setCustomHeight);
  }

  setCustomHeight = () => {
    // Catch the vh value and convert in unit
    const vh = window.innerHeight * 0.01;
    // Set our own property with this vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  listenRoutes = () => {
    // Catch the value from props
    const { history, location } = this.props;
    // Set the initial title on load
    this.changeTitle(location);
    // Listen route changing
    history.listen(this.changeTitle);
  }

  changeTitle = ({ pathname }) => {
    // Init the newTitle with no location title
    let newTitle = 'NmiDev - Red pill or Blue pill ?';
    // Set the value for newTitle
    switch (pathname) {
      case '/':
        newTitle = 'NmiDev - Developer and Tech-addict';
        break;
      case '/contact':
        newTitle = 'NmiDev - Contact';
        break;
      default:
        break;
    }
    // Set the newTitle for the document
    document.title = newTitle;
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
            <Route path="/contact" exact component={Contact} />

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
export default withRouter(Application);
