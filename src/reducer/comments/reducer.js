import * as actionTypes from './action';

const initialState = {
  message: '',
  error: false,
  comments: [],
  loading: false,
  success: false
};

/**
 * @param {*} state
 * @param {*} action
 * @returns {Object}
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        message: 'loading'
      };
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        comments: [...state.comments, action.payload],
        message: 'success'
      };
    case actionTypes.FETCH_COMMETNS_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        comments: action.payload,
        message: 'error'
      };
    default:
      return { ...state };
  }
};
