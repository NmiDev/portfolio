/*
 * Npm import
 */
import { createStore } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from './reducer';

/*
 * Code
 */
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

/*
 * Export
 */
export default store;
