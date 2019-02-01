import * as actionTypes from './actions';
import { SIGNUP_SUCCESS } from '../../constants/message';

const initialState = {
  message: '',
  isSignup: false,
  isAuthenticated: false,
  loginProcessing: false
};

/**
 * @param {Object} state Current app state.
 * @param {Object} action
 * @returns {String} Hello World.
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignup: action.payload,
        message: SIGNUP_SUCCESS.SIGNUP_SUCCESS_MESSAGE
      };
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        loginProcessing: true
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
        message: action.payload.errors
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isError: action.payload.isError,
        message: action.payload.message,
        isAuthenticated: action.payload.isAuthenticated
      };
    default:
      return state;
  }
};
