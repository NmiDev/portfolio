/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
// Styles
import './more.scss';
// Components
import Link from 'Components/Link';

/**
 * Code
 */
const More = ({ socialinks }) => (
  <section id="more" className="home-section">

    <div className="more-container">
      <h2 className="home-subtitle">And more ...</h2>

      <p className="home-parag">
        Je ne refuse jamais un nouvel échange, alors n’hésitez pas à m’adresser un message par les différents canaux ci-dessous ! À bientôt.
      </p>
    </div>

    <div className="more-links">
      {socialinks.map(socialink => (
        <Link key={socialink.id} {...socialink} />
      ))}
    </div>

  </section>
);

More.propTypes = {
  socialinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Export
 */
export default More;
