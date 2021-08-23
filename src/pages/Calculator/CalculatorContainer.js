import React from 'react';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import { changeInputValue, changeMathquillValue } from '../../store/ducks/calc/actions';
import { toggleButtonIsClicked } from '../../store/ducks/buttons/thunks';

export const CalculatorContainer = (props) => {
  const { input, changeInputValue, changeMathquillValue, buttons, toggleButtonIsClicked } = props;

  const onButtonClick = (button) => {
    toggleButtonIsClicked(button);

    switch (button.action) {
      case 'clean':
        changeMathquillValue();
        changeInputValue('');
        break;
      case 'backspace':
        changeInputValue(input.slice(0, -1));
        break;
      case 'operand':
        break;
      case 'number':
        changeInputValue(`${input}${button.value}`);
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
  buttons: state.buttons.buttons,
});

export default connect(mapStateToProps, {
  changeInputValue,
  changeMathquillValue,
  toggleButtonIsClicked,
})(CalculatorContainer);
