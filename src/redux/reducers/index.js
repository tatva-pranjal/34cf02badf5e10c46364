// import external libraries
import {combineReducers} from 'redux';

// import reducer
import reducer from './countryreducer';
import pageLoaderReducer from './pageLoaderReducer';

const appReducers = () =>
  combineReducers({
    country: reducer,
    pageLoader: pageLoaderReducer,
  });

export default appReducers;
