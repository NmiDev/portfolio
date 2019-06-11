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
    <div className="home-inner">

      <div className="home-inner-title">
        <h2 className="home-subtitle">Contact</h2>
      </div>

      <div className="home-inner-parag">
        <p className="home-parag">
          Je ne refuse jamais un nouveau défi, alors n’hésitez pas à me laisser un message.
        </p>
      </div>

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
