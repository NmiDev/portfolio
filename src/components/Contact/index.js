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
    >
      hello@nmiweb.dev
    </a>
    <a
      className="contact-phone"
      href="tel:+33643432602"
    >
      +33 (0)6 43 43 26 02
    </a>
  </div>
);

/**
 * Export
 */
export default Contact;
