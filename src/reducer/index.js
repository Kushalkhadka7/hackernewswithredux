import { combineReducers } from 'redux';

import { reducer as LoginSignup } from './login/reducer';
import { reducer as Comments } from './comments/reducer';
import { newsIdsReducer as NewsIds } from './news/newsIdsReducer';
import { newsStoriesReducer as NewsStories } from './news/newsStoriesReducer';

export default combineReducers({
  NewsIds,
  Comments,
  LoginSignup,
  NewsStories
});
