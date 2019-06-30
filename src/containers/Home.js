/**
 * NPM imports
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Home from 'Components/Home';

/**
 * Actions creators
 */

/**
 * State (Store)
 */
// Dats from store and ownProps
const mapStateToProps = state => ({
  socialinks: state.socialinks,
});

// Action from store and ownProps

/**
 * Container
 */
const HomeContainer = connect(
  mapStateToProps,
)(Home);

/**
 * Export
 */
export default withRouter(HomeContainer);
