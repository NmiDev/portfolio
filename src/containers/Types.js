/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import Types from 'Components/Types';

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
const TypesContainer = connect(
  mapStateToProps,
)(Types);

/**
 * Export
 */
export default TypesContainer;
