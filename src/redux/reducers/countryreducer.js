import {act} from 'react-test-renderer';

const initialState = {
  errMsg: '',
  data: null,
  weatherDetail: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_DETAIL':
      return {
        ...state,
        isSignout: false,
        data: action.payload.data,
        errMsg: '',
      };
    case 'SET_WEATHER_DETAIL':
      return {
        ...state,
        isSignout: false,
        weatherDetail: action.payload.weatherDetail,
        errMsg: '',
      };

    default:
      return state;
  }
};

export default authReducer;
