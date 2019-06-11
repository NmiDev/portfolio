/**
 * Initial State
 */
const initialState = {
  datas: {
    navlinks: [
      {
        id: 1,
        name: 'Home',
        href: '/home',
      },
      {
        id: 2,
        name: 'Projects',
        href: '/projects',
      },
    ],
    socialinks: [
      {
        id: 1,
        name: 'github',
        href: 'https://github.com/NmiDev',
        icon: 'FaGithubAlt',
      },
      {
        id: 2,
        name: 'linkedin',
        href: 'https://linkedin.com/in/nicolasmissiaen',
        icon: 'FaLinkedinIn',
      },
      {
        id: 3,
        name: 'mail',
        href: 'mailto:missiaen.nicolas@gmail.com',
        icon: 'FaEnvelope',
      },
    ],
    strings: [
      'Développeur',
      'Intégrateur',
      'Tech-addict',
      'Entrepreneur',
    ],
  },
  power: false,
};

/**
 * Types
 */
const SWITCH_POWER = 'SWITCH_POWER';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_POWER:
      return {
        ...state,
        power: !state.power,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const switchPower = () => ({
  type: SWITCH_POWER,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
