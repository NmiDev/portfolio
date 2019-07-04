/**
 * NPM imports
 */
import React from 'react';

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

    <a
      className="contact-mail"
      href="mailto:hello@nmiweb.dev"
      title="Leave me a messsage"
    >
      hello@nmiweb.dev
    </a>

    <a
      className="contact-github"
      href="https://github.com/NmiDev"
      title="Visit my GitHub"
    >
      GitHub
    </a>

  </div>
);

/**
 * Export
 */
export default Contact;
