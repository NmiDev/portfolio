/**
 * NPM Imports
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/**
* Local imports
*/
// Components
import Application from 'Containers/Application';
// Store
import store from 'Store/';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Router>
      <Application />
    </Router>
  </Provider>
);

const targetNode = document.getElementById('root');

render(rootComponent, targetNode);

/**
* Exports
*/
