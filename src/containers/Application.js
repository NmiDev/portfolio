/**
 * NPM imports
 */
import { connect } from 'react-redux';

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
export default ApplicationContainer;
