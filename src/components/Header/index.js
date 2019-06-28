/**
 * NPM imports
 */
import React from 'react';
import { FaRobot } from 'react-icons/fa';

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

    {/* Switch */}
    <Switch />

    {/* Navbar */}
    <Navbar />

  </header>
);

/**
 * Export
 */
export default Header;
