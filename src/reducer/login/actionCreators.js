import * as loginActions from './actions';
import * as loginHandler from '../../utils/loginHandler';

export const actions = {
  handleSignup: dispatch => loginData => {
    dispatch(loginActions.signUpSuccess(loginData));
  },
  handleLogin: async (dispatch, loginData) => {
    dispatch(loginActions.loginPending());

    const data = await loginHandler.handleLoginData(loginData);

    if (data.isError) {
      dispatch(loginActions.loginError(data));
    } else {
      dispatch(loginActions.loginSuccess(data));
    }
  }
};
