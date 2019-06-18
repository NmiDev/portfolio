/**
 * NPM imports
 */
import React from 'react';
import Moment from 'react-moment';

/**
 * Local imports
 */
import './copyright.scss';

/**
 * Code
 */
const Copyright = () => (
  <div className="copyright">
    <p>
      Merci de votre visite - &copy; <span><Moment format="YYYY" /></span> NmiWeb
    </p>
  </div>
);

/**
 * Export
 */
export default Copyright;
