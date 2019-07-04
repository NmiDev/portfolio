/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Switch from 'Components/Switch';

/**
 * Action creators
 */
import { switchPower } from 'Store/reducer';

/**
 * State (Store)
 */
// Datas from store and ownProps
const mapStateToProps = state => ({
  power: state.power,
});

// Action from store and ownProps
const mapDispatchToProps = dispatch => ({
  switchPower: () => {
    dispatch(switchPower());
  },
});

/**
 * Container
 */
const SwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Switch);

/**
 * Export
 */
export default SwitchContainer;
