/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaCog } from 'react-icons/fa';
import Loader from 'react-loader-spinner';


/**
 * Local imports
 */
// Styles
import './wheels.scss';

/**
 * Code
 */
const Wheels = ({ power }) => {
  const spinLgClass = classNames(
    'spin-lg',
    { 'spin-lg--rotate': power },
  );

  const spinMdClass = classNames(
    'spin-md',
    { 'spin-md--rotate': power },
  );

  const spinSlClass = classNames(
    'spin-sl',
    { 'spin-sl--rotate': power },
  );

  const pulse = classNames(
    'pulse',
    { 'pulse--display': power },
  );

  return (
    <div id="wheels">
      <FaCog className={spinLgClass} />
      <FaCog className={spinMdClass} />
      <FaCog className={spinSlClass} />
      <div className={pulse}>
        <Loader
          type="Rings"
          color="#E46F57"
          height="30"
          width="30"
        />
      </div>
    </div>
  );
};

Wheels.propTypes = {
  power: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Wheels;
