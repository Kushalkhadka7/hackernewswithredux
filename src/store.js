import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer/index.js';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default createStore(rootReducer, composeWithDevTools(middleware));
