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

      <div className="home-clipper">
        <h2 className="home-subtitle">Contact</h2>
      </div>

      <div className="home-panel">
        <p className="home-parag">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolorem pariatur, enim ut reprehenderit adipisci.</p>
      </div>

      <div id="skills-contact">
        {socialinks.map(socialink => (
          <Link key={socialink.id} {...socialink} />
        ))}
      </div>

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
