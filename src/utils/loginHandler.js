import { LOGIN_ERRORS } from '../constants/message';
import { LOGIN_CREDENTIALS } from '../constants/localStorage';
import { IS_AUTHENTICATED } from '../constants/sessionStorage';

/**
 * @param {*} loginData
 * @returns {Boolean}
 */
export const handleLoginData = loginData => {
  const loginCredentials = JSON.parse(localStorage.getItem(LOGIN_CREDENTIALS));

  if (!loginCredentials) {
    return { isError: true, errors: LOGIN_ERRORS.SIGNUP_ERROR };
  } else {
    if (loginCredentials.userName !== loginData.userName) {
      return { isError: true, errors: LOGIN_ERRORS.USERNAME_MISMATCH_ERROR };
    } else if (loginCredentials.password !== loginData.password) {
      return {
        isError: true,
        errors: LOGIN_ERRORS.PASSWORD_MISMATCH_ERROR
      };
    } else if (
      loginCredentials.userName === loginData.userName &&
      loginCredentials.password === loginData.password
    ) {
      sessionStorage.setItem(IS_AUTHENTICATED, true);

      return { isError: false, success: true, isAuthenticated: true };
    }
  }
};
