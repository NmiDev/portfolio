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

/**
 * Code
 */
const Header = () => (
  <header id="header">
    {/* Logo */}
    <Switch />

    {/* Navbar */}
    <Navbar />
  </header>
);

/**
 * Export
 */
export default Header;
