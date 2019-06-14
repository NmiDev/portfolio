/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './abstract.scss';
// Components
import Wheels from 'Containers/Wheels';

/**
 * Code
 */
const Abstract = () => (
  <section id="abstract" className="home-section">

    <div className="abstract-container">
      <h2 className="home-subtitle">Le pitch ?</h2>

      <p className="home-parag">Véritable passionné des nouvelles technologies et du vaste univers numérique, le développement Web est mon domaine de prédilection.</p>

      <p className="home-parag">Ce qui m’anime dans ce métier, c’est l’apprentissage permanent et la découverte perpétuelle de différentes techniques. C’est une remise en question incessante, au sein d’une incroyable communauté.</p>
    </div>

    <div className="abstract-wheels">
      <Wheels />
    </div>

  </section>
);

/**
 * Export
 */
export default Abstract;
