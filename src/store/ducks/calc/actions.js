import types from './types';

export const resetCalcState = () => {
  return {
    type: types.RESET_CALC_STATE,
  };
};

export const setInputValue = (value) => {
  return {
    type: types.SET_INPUT_VALUE,
    payload: value,
  };
};

export const setMathquillValue = () => {
  return {
    type: types.SET_MATHQUILL_VALUE,
  };
};

export const setValueA = () => {
  return {
    type: types.SET_VALUE_A,
  };
};

export const setValueB = () => {
  return {
    type: types.SET_VALUE_B,
  };
};

export const setOperator = (value) => {
  return {
    type: types.SET_OPERATOR,
    payload: value,
  };
};

export const setResult = (result) => {
  return {
    type: types.SET_RESULT,
    payload: result,
  };
};

export const setResetCounter = (value) => {
  return {
    type: types.SET_RESET_COUNTER,
    payload: value,
  };
};

export const setButtonIsClicked = (button) => ({
  type: types.SET_BUTTON_IS_CLICKED,
  payload: button,
});

export const setButtons = (buttons) => ({
  type: types.SET_BUTTONS,
  payload: buttons,
});
