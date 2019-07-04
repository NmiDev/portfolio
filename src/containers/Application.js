/**
 * NPM imports
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local imports
 */
import Application from 'Components/Application';

/**
 * Action creators
 */

/**
 * State (Store)
 */
// Datas from store and ownProps
const mapStateToProps = state => ({
  views: state.views,
});

// Actions from store and ownProps

/**
 * Containers
 */
const ApplicationContainer = connect(
  mapStateToProps,
)(Application);

/**
 * Export
 */
export default withRouter(ApplicationContainer);
