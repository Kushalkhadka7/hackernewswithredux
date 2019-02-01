export const FETCH_NEWS_IDS_ERROR = 'FETCH_NEWS_IDS_ERROR';
export const FETCH_NEWS_IDS_PENDING = 'FETCH_NEWS_IDS_PENDING';
export const FETCH_NEWS_IDS_SUCCESS = 'FETCH_NEWS_IDS_SUCCESS';

export const FETCH_NEWS_STORIES_ERROR = 'FETCH_NEWS_STORIES_ERROR';
export const FETCH_NEWS_STORIES_PENDING = 'FETCH_NEWS_STORIES_PENDING';
export const FETCH_NEWS_STORIES_SUCCESS = 'FETCH_NEWS_STORIES_SUCCESS';

/**
 * @returns {Object}
 */
export const fetchNewsIdsPending = () => ({
  type: FETCH_NEWS_IDS_PENDING
});

/**
 * @param {Object} error
 * @returns {Object}
 */
export const fetchNewsIdsError = error => ({
  type: FETCH_NEWS_IDS_ERROR,
  payload: error
});

/**
 * @param {Object} storyIds
 * @returns {Object}
 */
export const fetchNewsIdsSuccess = storyIds => ({
  type: FETCH_NEWS_IDS_SUCCESS,
  payload: storyIds
});

/**
 * @returns {Object}
 */
export const fetchNewsStoriesPending = () => ({
  type: FETCH_NEWS_STORIES_PENDING
});

/**
 * @param {Object} error
 * @returns {Object}
 */
export const fetchNewsStoriesError = error => ({
  type: FETCH_NEWS_STORIES_ERROR,
  payload: error
});

/**
 * @param {Object} stories
 * @returns {Object}
 */
export const fetchNewsStoriesSuccess = stories => ({
  type: FETCH_NEWS_STORIES_SUCCESS,
  payload: stories
});
