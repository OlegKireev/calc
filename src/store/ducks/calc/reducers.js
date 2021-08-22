import types from './types';

const initialState = {
  input: '',
  mathquill: '',
  valueA: null,
  valueB: null,
  operand: null,
  result: null,
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT_VALUE: {
      return {
        ...state,
        input: action.payload,
      };
    }
    case types.CHANGE_MATHQUILL_VALUE: {
      return {
        ...state,
        mathquill: action.payload,
      };
    }
    case types.SET_VALUE_A: {
      return {
        ...state,
        valueA: state.input,
      };
    }
    case types.SET_VALUE_B: {
      return {
        ...state,
        valueB: state.input,
      };
    }
    case types.SET_OPERAND: {
      return {
        ...state,
        operand: action.payload,
      };
    }
    case types.SET_RESULT: {
      return {
        ...state,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default calcReducer;
