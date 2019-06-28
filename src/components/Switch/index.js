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
// Styles and assets
import './switch.scss';
import Voice from '../../assets/voice.mp3';

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
      {power && <FaToggleOn className="switch-button" onClick={switchPower} />}

      {/* Switch Off */}
      {!power && <FaToggleOff className="switch-button" onClick={switchPower} />}

      {/* Title */}
      <p className={titleClass}>Power</p>

      {/* Sound effect */}
      {power && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio src={Voice} type="audio/mpeg" autoPlay>
          Your browser does not support the HTML audio track
        </audio>
      )}

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
