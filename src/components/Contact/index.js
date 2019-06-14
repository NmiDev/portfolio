/**
 * NPM imports
 */
import React from 'react';
import Moment from 'react-moment';

/**
 * Local imports
 */
// Styles
import './contact.scss';

/**
 * Code
 */
const Contact = () => (
  <div id="contact">
    <div className="contact-mail">
      <a
        className="contact-mail-link"
        href="mailto:hello@nmiweb.dev"
      >
        hello@nmiweb.dev
      </a>
      <a
        className="contact-mail-github"
        href="https://github.com/NmiDev"
      >
        GitHub
      </a>
    </div>
    <div className="contact-footer">
      <p>
        Merci de votre visite - &copy; <span><Moment format="YYYY" /></span> NmiWeb
      </p>
    </div>
  </div>
);

/**
 * Export
 */
export default Contact;
