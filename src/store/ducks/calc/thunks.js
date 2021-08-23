import {
  setValueA,
  setValueB,
  setOperator,
  setResult,
  setInputValue,
  setMathquillValue,
  setButtonIsClicked,
  setResetCounter,
  resetCalcState,
} from './actions';

export const toggleButtonIsClicked = (button) => (dispatch) => {
  dispatch(setButtonIsClicked(button));
  setTimeout(() => {
    dispatch(setButtonIsClicked(button));
  }, 250);
};

export const operatorClickHandler = (button) => (dispatch) => {
  dispatch(setValueA());
  dispatch(setOperator(button.value));
  dispatch(setInputValue(''));
  dispatch(setMathquillValue());
};

export const resultClickHandler = () => (dispatch) => {
  dispatch(setValueB());
  dispatch(setResult(null));
  dispatch(setInputValue());
  dispatch(setValueA());
};

export const resetClickHandler = (counter) => (dispatch) => {
  if (counter <= 0) {
    dispatch(setResetCounter(counter + 1));
    dispatch(setInputValue(''));
    dispatch(setResult(0));
  } else {
    dispatch(resetCalcState());
    dispatch(setResetCounter(0));
  }
};
