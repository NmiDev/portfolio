/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import Wheels from 'Components/Wheels';

/**
 * State (Store)
 */
// Datas from store and ownProps
const mapStateToProps = state => ({
  power: state.power,
});

// Action from store and ownProps

/**
 * Container
 */
const WheelsContainer = connect(
  mapStateToProps,
)(Wheels);

/**
 * Export
 */
export default WheelsContainer;
