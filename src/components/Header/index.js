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
import Navbar from 'Components/Navbar';

/**
 * Code
 */
const Header = () => (
  <header id="header">
    {/* Logo */}
    <a href="#" className="logo">Nicolas Missiaen</a>

    {/* Navbar */}
    <Navbar />
  </header>
);

/**
 * Export
 */
export default Header;
