/**
 * NPM Imports
 */
import React from 'react';
import { render } from 'react-dom';

/**
* Local imports
*/
import Application from 'Components/Application';

/**
 * Code
 */
const rootComponent = (
  <Application />
);

const targetNode = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, targetNode);
});

/**
* Exports
*/
