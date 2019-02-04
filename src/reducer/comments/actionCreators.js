import * as fetchCommentsActions from './action';
import * as hackerNewsServices from '../../services/hackerNews';

export const actions = {
  fetchComments: commentsId => dispatch => {
    dispatch(fetchCommentsActions.fetchCommentsPending());

    return hackerNewsServices
      .getComments(commentsId)
      .then(comments =>
        dispatch(fetchCommentsActions.fetchCommentsSuccess(comments))
      )
      .catch(error => fetchCommentsActions.fetchCommentsError(error));
  }
};
