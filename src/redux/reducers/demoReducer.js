import {act} from 'react-test-renderer';

const initialState = {
  authLoader: false,
  isLoading: false,
  isSignout: false,
  errMsg: '',
  data: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isSignout: false,
        data: action.payload.data,
        errMsg: '',
      };
    case 'SIGN_IN_FAIL':
      return {
        ...state,
        isSignout: false,
        errMsg: action.payload.errMsg,
        data: null,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignout: true,
      };
    default:
      return state;
  }
};

export default authReducer;
