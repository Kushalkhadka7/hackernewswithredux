import * as actionTypes from './actions';

const initialState = {
  stories: [],
  error: false,
  loading: false,
  success: false
};

/**
 * @param {*} state
 * @param {*} action
 * @returns {Object}
 */
export const newsStoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_STORIES_PENDING:
      return {
        ...state,
        error: false,
        loading: true,
        success: false
      };
    case actionTypes.FETCH_NEWS_STORIES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: true,
        stories: action.payload
      };
    case actionTypes.FETCH_NEWS_STORIES_ERROR:
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
