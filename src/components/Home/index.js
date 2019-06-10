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
import Developer from './Developer';
import Abstract from './Abstract';
import Contact from './Contact';

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
