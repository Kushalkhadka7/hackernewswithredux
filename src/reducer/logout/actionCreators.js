import * as logoutActions from './action';

export const actions = {
  logout: dispatch => {
    dispatch(logoutActions.logoutFromApp());
  }
};
