/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './developer.scss';
// Components
import Robot from 'Containers/Robot';
import Animate from 'Containers/Animate';

/**
 * Code
 */
const Developer = () => (
  <section id="developer" className="home-section">

    {/* Robot animation */}
    <Robot />

    {/* Main title */}
    <h1 className="home-title">Bonjour, je suis Nicolas !</h1>

    {/* Typed Js animation */}
    <Animate />

  </section>
);

/**
 * Export
 */
export default Developer;
