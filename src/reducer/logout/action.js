export const LOGOUT = 'LOGOUT';

/**
 * @returns {Object}
 */
export const logoutFromApp = () => ({
  type: 'LOGOUT',
  payload: sessionStorage.clear()
});
