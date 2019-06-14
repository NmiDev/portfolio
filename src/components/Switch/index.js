/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

/**
 * Local imports
 */
import './switch.scss';

/**
 * Code
 */
const Switch = ({ power, switchPower }) => {
  const titleClass = classNames(
    'switch-title',
    { 'switch-title--animation': !power },
  );

  return (
    <div id="switch">

      {/* Switch On */}
      {power === true && <FaToggleOn className="switch-button" onClick={switchPower} />}

      {/* Switch Off */}
      {power === false && <FaToggleOff className="switch-button" onClick={switchPower} />}

      {/* Title */}
      <p className={titleClass}>Power</p>

    </div>
  );
};

Switch.propTypes = {
  power: PropTypes.bool.isRequired,
  switchPower: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Switch;
