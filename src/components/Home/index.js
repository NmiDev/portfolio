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
import Types from 'Containers/Types';
import Link from 'Components/Link';

/**
 * Code
 */
const Home = ({ socialinks }) => (
  <div id="home">

    {/* Section developer */}
    <section id="developer" className="home-section">
      <Robot />

      <h1 className="developer-title">Bonjour, je suis Nicolas !</h1>

      <Types />
    </section>

    {/* Section abstract */}
    <section id="abstract" className="home-section">
      <p className="abstract-parag">Véritable passionné des nouvelles technologies et du vaste univers numérique, le développement Web constitue mon domaine de prédilection.</p>

      <p className="abstract-parag">Ce qui m’anime dans ce métier, c’est l’apprentissage permanent et la découverte perpétuelle de différentes techniques. C’est une remise en question incessante, au sein d’une incroyable communauté, alors n’hésitez pas à m’adresser un message.</p>
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
};

/**
 * Export
 */
export default Home;
