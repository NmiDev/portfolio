/**
 * NPM imports
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local imports
 */
import TypedJs from 'Components/TypedJs';

/**
 * State (Store)
 */
// Data from store and ownProps
const mapStateToProps = state => ({
  strings: state.strings,
});

// Actions from store and ownProps

/**
 * Conatiners
 */
const TypedJsContainer = connect(
  mapStateToProps,
)(TypedJs);

/**
 * Export
 */
export default withRouter(TypedJsContainer);
