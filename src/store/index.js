import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  form: formReducer,
  auth: authReducer
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
