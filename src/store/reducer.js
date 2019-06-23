/**
 * Initial State
 */
const initialState = {
  datas: {
    views: [
      {
        id: 1,
        name: 'Home',
        path: '/',
      },
      {
        id: 2,
        name: 'Contact',
        path: '/contact',
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
      {
        id: 4,
        name: 'resume',
        href: 'https://drive.google.com/open?id=1PSQxnEJZbdC0WBets0VE1r7qI3FaQbdk',
        icon: 'FaFile',
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
