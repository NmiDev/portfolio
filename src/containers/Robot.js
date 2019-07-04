/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import Robot from 'Components/Robot';

/**
 * Actions creators
 */

/**
 * State (Store)
 */
// Datas from store and ownProps
const mapStateToProps = state => ({
  power: state.power,
});

// Actions from store and ownProps

/**
 * Container
 */
const RobotContainer = connect(
  mapStateToProps,
)(Robot);

/**
 * Export
 */
export default RobotContainer;
