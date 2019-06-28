/**
 * Initial State
 */
const initialState = {
  power: false,
  country: 'fr',
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
      href: 'https://drive.google.com/open?id=1PSQxnEJZbdC0WBets0VE1r7qI3FaQbdk',
      title: 'Visit my resume',
      icon: 'FaFile',
    },
  ],
  datas: {
    strings: [
      'Développeur',
      'Intégrateur',
      'Tech-addict',
      'Entrepreneur',
    ],
  },
};

/**
 * Types
 */
const SWITCH_POWER = 'SWITCH_POWER';
const SWITCH_COUNTRY = 'SWITCH_COUNTRY';

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

    case SWITCH_COUNTRY: {
      let newCountry;

      if (state.country === 'fr') {
        newCountry = 'en';
      } else {
        newCountry = 'fr';
      }

      return {
        ...state,
        country: newCountry,
      };
    }

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

export const switchCountry = () => ({
  type: SWITCH_COUNTRY,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
