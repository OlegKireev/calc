import types from './types';

const initialState = {
  input: '',
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT_VALUE: {
      return {
        ...state,
        input: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default calcReducer;
