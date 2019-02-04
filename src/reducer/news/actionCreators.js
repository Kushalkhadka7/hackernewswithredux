import * as fetchNewsActions from './actions';
import * as hackerNewsServices from '../../services/hackerNews';

export const actions = {
  fetchNewsIds: newsType => dispatch => {
    dispatch(fetchNewsActions.fetchNewsIdsPending());

    return hackerNewsServices
      .getNewsIds(newsType)
      .then(storyIds => {
        dispatch(fetchNewsActions.fetchNewsIdsSuccess(storyIds));
        dispatch(actions.fetchNewsStories(storyIds));
      })
      .catch(error => {
        dispatch(fetchNewsActions.fetchNewsIdsError(error));
      });
  },
  fetchNewsStories: storyIds => {
    return dispatch => {
      dispatch(fetchNewsActions.fetchNewsStoriesPending());

      return hackerNewsServices
        .getNewsStories(storyIds)
        .then(stories => {
          dispatch(fetchNewsActions.fetchNewsStoriesSuccess(stories));
        })
        .catch(error =>
          dispatch(fetchNewsActions.fetchNewsStoriesError(error))
        );
    };
  }
};
