/**
 * NPM imports
 */
import { connect } from 'react-redux';

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
  title: state.datas.home.title,
  parags: state.datas.home.parags,
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
export default HomeContainer;
