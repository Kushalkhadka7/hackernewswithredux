import types from './action';

/**
 * @param {*} state
 * @param {*} action
 * @returns {Object}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGOUT:
      console.log('helo');
      return { ...state };
    default:
      return { ...state };
  }
};
