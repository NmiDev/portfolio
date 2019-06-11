/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import Animate from 'Components/Animate';

/**
 * State (Store)
 */
// Data from store and ownProps
const mapStateToProps = state => ({
  strings: state.datas.strings,
});

// Actions from store and ownProps

/**
 * Conatiners
 */
const AnimateContainer = connect(
  mapStateToProps,
)(Animate);

/**
 * Export
 */
export default AnimateContainer;
