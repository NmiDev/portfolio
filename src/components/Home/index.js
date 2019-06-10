/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './home.scss';
// Components
import Contact from 'Containers/Contact';
import Developer from './Developer';
import Abstract from './Abstract';

/**
 * Code
 */
const Home = () => (
  <main id="home">

    <Developer />

    <Abstract />

    <Contact />

  </main>
);

/**
 * Export
 */
export default Home;
