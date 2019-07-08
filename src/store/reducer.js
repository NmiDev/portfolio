/**
 * Initial State
 */
const initialState = {
  power: false,
  routes: {
    '/': {
      name: 'Home',
      path: '/',
      title: 'NmiDev - Developer and Tech-addict',
      component: 'Home',
    },
    '/contact': {
      name: 'Contact',
      path: '/contact',
      title: 'NmiDev - Contact',
      component: 'Contact',
    },
  },
  socialinks: [
    {
      id: 1,
      name: 'github',
      href: 'https://github.com/NmiDev',
      title: 'Visit my GitHub',
      icon: 'FaGithubAlt',
    },
    {
      id: 2,
      name: 'linkedin',
      href: 'https://linkedin.com/in/nicolasmissiaen',
      title: 'Visit my LinkedIn',
      icon: 'FaLinkedinIn',
    },
    {
      id: 3,
      name: 'resume',
      href: 'https://drive.google.com/open?id=19G73mb3GcNRFdaOUCnEfyPVAGVbThSR3',
      title: 'Visit my resume',
      icon: 'FaFile',
    },
  ],
  strings: [
    'Développeur',
    'Intégrateur',
    'Tech-addict',
    'Entrepreneur',
  ],
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
