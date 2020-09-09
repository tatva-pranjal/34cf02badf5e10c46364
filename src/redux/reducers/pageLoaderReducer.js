// IMPORT REDUX ACTION CONSTANTS
const initialState = {
  isVisible: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PAGE_LOADER':
      return {
        ...state,
        isVisible: true,
      };

    case 'HIDE_PAGE_LOADER':
      return {
        ...state,
        isVisible: false,
      };

    default:
      return state;
  }
};

export default reducer;
