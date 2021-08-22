import types from './types';

export const changeInputValue = (value) => {
  return {
    type: types.CHANGE_INPUT_VALUE,
    payload: value,
  };
};

export const changeMathquillValue = (value) => {
  return {
    type: types.CHANGE_MATHQUILL_VALUE,
    payload: value,
  };
};

export const setValuA = () => {
  return {
    type: types.SET_VALUE_A,
  };
};

export const setValuB = () => {
  return {
    type: types.SET_VALUE_B,
  };
};

export const setOperand = (value) => {
  return {
    type: types.SET_OPERAND,
    payload: value,
  };
};

export const setResult = () => {
  return {
    type: types.SET_RESULT,
  };
};
