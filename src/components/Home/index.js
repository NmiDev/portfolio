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
import More from 'Containers/More';
import Developer from './Developer';
import Abstract from './Abstract';

/**
 * Code
 */
const Home = () => (
  <div id="home">

    {/* Section developer */}
    <Developer />

    {/* Section abstract */}
    <Abstract />

    {/* Section more */}
    <More />

  </div>
);

/**
 * Export
 */
export default Home;
