import React from 'react';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import { changeInputValue, changeMathquillValue } from '../../store/ducks/calc/actions';
import { setButtons } from '../../store/ducks/buttons/actions';

export const CalculatorContainer = (props) => {
  const { input, changeInputValue, changeMathquillValue, buttons, setButtons } = props;

  const onButtonClick = ({ cell, value, action }) => {
    const changeButtonIsClicked = (isClicked) => {
      const buttonsCopy = buttons.slice();
      const button = buttonsCopy.find((but) => but.cell === cell);
      const buttonsWithoutClickedButton = buttonsCopy.filter((button) => button.cell !== cell);
      button.isClicked = isClicked;
      const newButtons = buttonsWithoutClickedButton.concat(button);
      setButtons(newButtons);
    };

    changeButtonIsClicked(true);

    switch (action) {
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
        changeInputValue(`${input}${value}`);
        break;
      default:
        break;
    }

    setTimeout(() => {
      changeButtonIsClicked(false);
    }, 250);
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
  setButtons,
})(CalculatorContainer);
