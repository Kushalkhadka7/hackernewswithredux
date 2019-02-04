export const FETCH_COMMETNS_ERROR = 'FETCH_COMMENTS_ERROR';
export const FETCH_COMMENTS_PENDING = 'FETCH_COMMENTS_PENDING';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

/**
 * @returns {Object}
 */
export const fetchCommentsPending = () => ({
  type: FETCH_COMMENTS_PENDING
});

/**
 * @param {Object} comments
 * @returns {Object}
 */
export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

/**
 * @param {Object} error
 * @returns {Object}
 */
export const fetchCommentsError = error => ({
  type: FETCH_COMMETNS_ERROR,
  payload: error
});
