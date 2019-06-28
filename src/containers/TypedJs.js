/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import TypedJs from 'Components/TypedJs';

/**
 * State (Store)
 */
// Data from store and ownProps
const mapStateToProps = state => ({
  strings: state.datas.home.strings,
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
export default TypedJsContainer;
