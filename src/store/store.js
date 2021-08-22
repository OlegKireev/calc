import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './ducks';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers(reducers);
const composeEnhansers = composeWithDevTools({ trace: true });
const store = createStore(rootReducer, composeEnhansers(applyMiddleware(thunkMiddleware)));

export default store;
