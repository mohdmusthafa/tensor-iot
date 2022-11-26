/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday November 26th 2022
 * Product : TensorIoT
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import launchesReducer from './launches/reducer';

const rootReducer = combineReducers({
  launches: launchesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;