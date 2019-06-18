/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

/**
 * local imports
 */
import './types.scss';

/**
 * Code
 */
class Types extends React.Component {
  static propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  componentDidMount() {
    const { strings } = this.props;

    const options = {
      strings,
      startDelay: 20,
      typeSpeed: 150,
      backSpeed: 100,
      shuffle: false,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            className="types"
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Types;
