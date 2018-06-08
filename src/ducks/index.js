import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import content from './content';
import ui from './ui';


const rootReducer = combineReducers({
  content,
  ui
});

const store = createStore(
  rootReducer,
  compose(typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : (f) => f),
  applyMiddleware(thunk)
);

export default store;
