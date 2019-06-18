/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './contact.scss';
// Components
import Copyright from 'Components/Copyright';

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
    <Copyright />
  </div>
);

/**
 * Export
 */
export default Contact;
