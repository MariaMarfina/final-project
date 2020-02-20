import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { pagesInfo } from '../reducers/pagesInfo';
import dataAccessLayerInfo from '../reducers/dataAccessLayerInfo';

export default () => {
  const store = createStore(
    combineReducers({
      pagesInfo,
      dataAccessLayerInfo
    }),
    applyMiddleware(thunkMiddleware)
  );

  return store;
};