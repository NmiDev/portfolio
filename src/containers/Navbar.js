/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import Navbar from 'Components/Navbar';

/**
 * Action creators
 */

/**
 * State (Store)
 */
// Datas from store and ownProps
const mapStateToProps = state => ({
  views: state.datas.views,
});

// Actions from store and ownProps

/**
 * Containers
 */
const NavbarContainer = connect(
  mapStateToProps,
)(Navbar);

/**
 * Export
 */
export default NavbarContainer;
