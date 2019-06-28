/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
// Styles
import './home.scss';
// Components
import Robot from 'Containers/Robot';
import TypedJs from 'Containers/TypedJs';
import Link from 'Components/Link';

/**
 * Code
 */
const Home = ({ socialinks, title, parags }) => (
  <div id="home">

    {/* Section developer */}
    <section id="developer" className="home-section">
      <Robot />

      <h1 className="developer-title">{title}</h1>

      <TypedJs />
    </section>

    {/* Section abstract */}
    <section id="abstract" className="home-section">
      {parags.map(parag => (
        <p className="abstract-parag" key={parag}>{parag}</p>
      ))}
    </section>


    {/* Section more */}
    <section id="social" className="home-section">
      {socialinks.map(socialink => (
        <Link key={socialink.id} {...socialink} />
      ))}
    </section>

  </div>
);

Home.propTypes = {
  socialinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  parags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**
 * Export
 */
export default Home;
