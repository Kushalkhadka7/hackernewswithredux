import { LOGIN_CREDENTIALS } from '../constants/localStorage';

/**
 * @param {*} loginData
 * @returns {boolean} Signup success or not.
 */
export const setSignupData = loginData => {
  if (loginData) {
    localStorage.setItem(LOGIN_CREDENTIALS, JSON.stringify(loginData));

    return true;
  }
};
