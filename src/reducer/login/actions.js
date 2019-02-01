import * as signupHandler from '../../utils/signupHandler';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

/**
 * @param {Object} loginData
 * @returns {Object}
 */
export const signUpSuccess = loginData => ({
  type: SIGN_UP_SUCCESS,
  payload: signupHandler.setSignupData(loginData)
});

/**
 * @returns {Object} Action.
 */
export const loginPending = () => ({
  type: LOGIN_PENDING
});

/**
 * @param {Object} data
 * @returns {Object}
 */
export const loginError = data => ({
  type: LOGIN_ERROR,
  payload: data.error
});

/**
 * @param {Object} data
 * @returns {Object}
 */
export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});
