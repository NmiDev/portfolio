/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import More from 'Components/Home/More';

/**
 * Actions creators
 */

/**
 * State (Store)
 */
// Dats from store and ownProps
const mapStateToProps = state => ({
  socialinks: state.datas.socialinks,
});

// Action from store and ownProps

/**
 * Container
 */
const MoreContainer = connect(
  mapStateToProps,
)(More);

/**
 * Export
 */
export default MoreContainer;
