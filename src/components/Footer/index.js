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
    <p>
      <Moment format="YYYY" /> - <a className="footer-source" href="https://github.com/NmiDev/portfolio">Source on GitHub</a>
    </p>
  </footer>
);

/**
 * Export
 */
export default Footer;
