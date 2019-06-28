/**
 * NPM imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
// Styles and assets
import './country.scss';

/**
 * Code
 */
const Country = ({ country, switchCountry }) => (
  <div id="country">

    {/* French language */}
    {country === 'fr'
      && <div onClick={switchCountry} role="presentation" className="country-link">fr</div>}

    {/* English language */}
    {country === 'en'
      && <div onClick={switchCountry} role="presentation" className="country-link">en</div>}

  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  switchCountry: PropTypes.func.isRequired,
};

export default Country;
