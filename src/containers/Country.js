/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local imports
 */
import Country from 'Components/Country';

/**
 * Action creators
 */
import { switchCountry } from 'Store/reducer';

/**
 * State (Store)
 */
// Datas from store and ownProps
const mapStateToProps = state => ({
  country: state.country,
});

// Actions from store and ownProps
const mapDispatchToProps = dispatch => ({
  switchCountry: () => {
    dispatch(switchCountry());
  },
});

/**
 * Containers
 */
const CountryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Country);

/**
 * Export
 */
export default CountryContainer;
