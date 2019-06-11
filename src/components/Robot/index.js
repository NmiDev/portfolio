/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import Loader from 'react-loader-spinner';

/**
 * Local import
 */
import './robot.scss';

/**
 * Code
 */
const Robot = ({ power }) => {
  // Mouse animation with classnames
  const mousePowerOn = classNames(
    'robot-mouse-bars',
    { 'robot-mouse-bars--animation': power },
  );

  const mousePowerOff = classNames(
    'robot-mouse-shape',
    { 'robot-mouse-shape--fade': power },
  );

  // Right eye animation with classnames
  const eyeRightClass = classNames(
    'eye-right-inside',
    { 'eye-right-inside--animation': power },
  );

  // Left eye animation with classnames
  const eyeLeftClass = classNames(
    'eye-left-inside',
    { 'eye-left-inside--animation': power },
  );

  return (
    <div id="robot">

      {/* Robot eyes */}
      <div className="robot-eyes">

        {/* Eye left */}
        <div className="eye-left">
          <div className="eye-left-outside">
            <IoMdClose className={eyeLeftClass} />
          </div>
        </div>

        {/* Eye right */}
        <div className="eye-right">
          <div className="eye-right-outside">
            <div className={eyeRightClass} />
          </div>
        </div>
      </div>

      {/* Robot mouse */}
      <div className="robot-mouse">
        {/* Unanimate mouse */}
        {!power && (
          <div className={mousePowerOff} />
        )}

        {/* Animate mouse */}
        {power && (
          <div className={mousePowerOn}>
            <Loader
              type="Bars"
              color="#333E46"
              height="50"
              width="80"
            />
          </div>
        )}
      </div>
    </div>
  );
};

Robot.propTypes = {
  power: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Robot;
