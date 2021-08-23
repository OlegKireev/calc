import React from 'react';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import {
  setInputValue,
  setMathquillValue,
  resetCalcState,
  setResetCounter,
} from '../../store/ducks/calc/actions';
import {
  toggleButtonIsClicked,
  operatorClickHandler,
  resultClickHandler,
  resetClickHandler,
} from '../../store/ducks/calc/thunks';

export const CalculatorContainer = (props) => {
  const {
    input,

    setInputValue,
    setMathquillValue,
    resetCalcState,
    buttons,
    toggleButtonIsClicked,
    operatorClickHandler,
    resetCounter,
    setResetCounter,
    resultClickHandler,
    resetClickHandler,
  } = props;

  const onButtonClick = (button) => {
    toggleButtonIsClicked(button);

    switch (button.action) {
      case 'clean':
        resetClickHandler(resetCounter);
        break;
      case 'backspace':
        setInputValue(input.slice(0, -1));
        break;
      case 'operator':
        operatorClickHandler(button);
        break;
      case 'result':
        resultClickHandler();
        break;
      case 'number':
        setInputValue(`${input}${button.value}`);
        break;
      default:
        break;
    }
  };

  return <Calculator {...props} buttons={buttons} onButtonClick={onButtonClick} />;
};

const mapStateToProps = (state) => ({
  input: state.calc.input,
  mathquill: state.calc.mathquill,
  operator: state.calc.operator,
  result: state.calc.result,
  buttons: state.calc.buttons,
  resetCounter: state.calc.resetCounter,
});

export default connect(mapStateToProps, {
  resetCalcState,
  setInputValue,
  setMathquillValue,
  toggleButtonIsClicked,
  operatorClickHandler,
  resultClickHandler,
  setResetCounter,
  resetClickHandler,
})(CalculatorContainer);
