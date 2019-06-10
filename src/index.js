/**
 * NPM Imports
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
* Local imports
*/
// Components
import Application from 'Components/Application';
// Store
import store from 'Store/';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Application />
  </Provider>
);

const targetNode = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, targetNode);
});

/**
* Exports
*/
