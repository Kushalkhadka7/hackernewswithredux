import * as actionTypes from './actions';

const initialState = {
  newsIds: [],
  error: false,
  loading: false,
  success: false
};

/**
 * @param {*} state
 * @param {*} action
 * @returns {Object}
 */
export const newsIdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_IDS_PENDING:
      return { ...state, error: false, loading: true, success: false };
    case actionTypes.FETCH_NEWS_IDS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: false,
        newsIds: action.payload
      };
    case actionTypes.FETCH_NEWS_IDS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
        message: action.payload
      };
    default:
      return { ...state };
  }
};
