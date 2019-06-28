/**
 * NPM imports
 */
import React from 'react';

/**
 * Local imports
 */
// Styles
import './header.scss';
// Components
import Navbar from 'Containers/Navbar';
import Switch from 'Containers/Switch';
import Country from 'Containers/Country';

/**
 * Code
 */
const Header = () => (
  <header id="header">

    {/* Switch */}
    <Switch />

    <div className="header-container">
      {/* Navbar */}
      <Navbar />
      {/* Country */}
      <Country />
    </div>

  </header>
);

/**
 * Export
 */
export default Header;
