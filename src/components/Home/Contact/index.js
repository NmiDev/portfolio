/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
// Styles
import './contact.scss';
// Components
import Link from 'Components/Link';

/**
 * Code
 */
const Contact = ({ socialinks }) => (
  <section id="contact" className="home-section">

    <div className="contact-container">
      <h2 className="home-subtitle">And more ...</h2>

      <p className="home-parag">
        Je ne refuse jamais un nouvel échange, alors n’hésitez pas à m’adresser un message par les différents canaux ci-dessous ! À bientôt.
      </p>
    </div>

    <div className="contact-links">
      {socialinks.map(socialink => (
        <Link key={socialink.id} {...socialink} />
      ))}
    </div>

  </section>
);

Contact.propTypes = {
  socialinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Export
 */
export default Contact;
