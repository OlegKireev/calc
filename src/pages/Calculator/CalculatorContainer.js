import React, { useState } from 'react';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import { changeInputValue, changeMathquillValue } from '../../store/ducks/calc/actions';

export const CalculatorContainer = (props) => {
  const { input, changeInputValue, changeMathquillValue } = props;

  const [buttons, changeButtons] = useState([
    {
      label: 'C',
      action: 'clean',
      cell: 1,
      type: 'action',
      isClicked: false,
    },
    {
      label: '+/-',
      action: null,
      cell: 2,
      type: 'action',
      isClicked: false,
    },
    {
      label: '%',
      action: null,
      cell: 3,
      type: 'action',
      isClicked: false,
    },
    {
      label: '/',
      action: null,
      cell: 4,
      type: 'action',
      isClicked: false,
    },
    {
      label: 'x',
      action: null,
      cell: 8,
      type: 'action',
      isClicked: false,
    },
    {
      label: '-',
      action: null,
      cell: 12,
      type: 'action',
      isClicked: false,
    },
    {
      label: '+',
      action: null,
      cell: 16,
      type: 'action',
      value: '+',
      isClicked: false,
    },
    {
      label: '<',
      action: 'backspace',
      cell: 19,
      type: 'action',
      isClicked: false,
    },
    {
      label: '=',
      action: null,
      cell: 20,
      type: 'result',
      isClicked: false,
    },
    {
      label: '.',
      action: 'number',
      cell: 18,
      type: 'number',
      isClicked: false,
    },
    {
      label: '0',
      action: 'number',
      cell: 17,
      type: 'number',
      value: 0,
      isClicked: false,
    },
    {
      label: '1',
      action: 'number',
      cell: 13,
      type: 'number',
      value: 1,
      isClicked: false,
    },
    {
      label: '2',
      action: 'number',
      cell: 14,
      type: 'number',
      value: 2,
      isClicked: false,
    },
    {
      label: '3',
      action: 'number',
      cell: 15,
      type: 'number',
      value: 3,
      isClicked: false,
    },
    {
      label: '4',
      action: 'number',
      cell: 9,
      type: 'number',
      value: 4,
      isClicked: false,
    },
    {
      label: '5',
      action: 'number',
      cell: 10,
      type: 'number',
      value: 5,
      isClicked: false,
    },
    {
      label: '6',
      action: 'number',
      cell: 11,
      type: 'number',
      value: 6,
      isClicked: false,
    },
    {
      label: '7',
      action: 'number',
      cell: 5,
      type: 'number',
      value: 7,
      isClicked: false,
    },
    {
      label: '8',
      action: 'number',
      cell: 6,
      type: 'number',
      value: 8,
      isClicked: false,
    },
    {
      label: '9',
      action: 'number',
      cell: 7,
      type: 'number',
      value: 9,
      isClicked: false,
    },
  ]);

  const onButtonClick = ({ cell, value, action }) => {
    const changeButtonIsClicked = (isClicked) => {
      const buttonsCopy = buttons.slice();
      const button = buttonsCopy.find((but) => but.cell === cell);
      const buttonsWithoutClickedButton = buttonsCopy.filter((button) => button.cell !== cell);
      button.isClicked = isClicked;
      const newButtons = buttonsWithoutClickedButton.concat(button);
      changeButtons(newButtons);
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
});

export default connect(mapStateToProps, { changeInputValue, changeMathquillValue })(
  CalculatorContainer
);
