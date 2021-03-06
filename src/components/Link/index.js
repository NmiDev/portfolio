/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as components from 'react-icons/fa';

/**
 * Local imports
 */
import './link.scss';

/**
 * Code
 */
const Link = ({
  name,
  href,
  title,
  icon,
}) => {
  const Icon = components[icon];

  return (
    <a
      href={href}
      title={title}
      className={`social-link social-link-${name}`}
    >
      <Icon />
    </a>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Link;
