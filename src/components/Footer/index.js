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
      Merci de votre visite - <span><Moment format="YYYY" /></span> NmiWeb
    </p>
  </footer>
);

/**
 * Export
 */
export default Footer;
