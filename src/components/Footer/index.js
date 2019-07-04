/**
 * NPM imports
 */
import React from 'react';
import Moment from 'react-moment';

/**
 * Local imports
 */
import './footer.scss';

/**
 * Code
 */
const Footer = () => (
  <footer id="footer">

    <Moment format="YYYY" />

    <span className="footer-span"> - </span>

    <a
      className="footer-source"
      href="https://github.com/NmiDev/portfolio"
      title="Visit my GitHub"
    >
      Source on GitHub
    </a>

  </footer>
);

/**
 * Export
 */
export default Footer;
