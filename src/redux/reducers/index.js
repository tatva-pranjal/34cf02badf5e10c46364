// import external libraries
import {combineReducers} from 'redux';

// import reducer
import demoReducer from './demoReducer';
import pageLoaderReducer from './pageLoaderReducer';

const appReducers = () =>
  combineReducers({
    demo: demoReducer,
    pageLoader: pageLoaderReducer,

  });

export default appReducers;
