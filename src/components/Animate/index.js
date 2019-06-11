/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

/**
 * local imports
 */
import './animate.scss';

/**
 * Code
 */
class Animate extends React.Component {
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
      shuffle: true,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      contentType: 'html',
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
            style={{ whiteSpace: 'pre' }}
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
export default Animate;
