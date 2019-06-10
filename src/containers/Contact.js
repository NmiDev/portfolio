/**
 * NPM imports
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'Components/Home/Contact';

/**
 * Actions creators
 */

/**
 * State (Store)
 */
// Dats from store and ownProps
const mapStateToProps = state => ({
  socialinks: state.datas.socialinks,
});

// Action from store and ownProps

/**
 * Container
 */
const ContactContainer = connect(
  mapStateToProps,
)(Contact);

/**
 * Export
 */
export default ContactContainer;
