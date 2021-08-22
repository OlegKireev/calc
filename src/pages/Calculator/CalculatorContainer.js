import React, { useState } from 'react';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import actions from '../../store/ducks/calc/actions';

export const CalculatorContainer = (props) => {
  const { input, changeInputValue } = props;
  const [buttons, changeButtons] = useState([
    {
      label: 'C',
      action: null,
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
      isClicked: false,
    },
    {
      label: '<',
      action: null,
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
      action: null,
      cell: 18,
      type: 'number',
      isClicked: false,
    },
    {
      label: '0',
      action: null,
      cell: 17,
      type: 'number',
      value: 0,
      isClicked: false,
    },
    {
      label: '1',
      action: null,
      cell: 13,
      type: 'number',
      value: 1,
      isClicked: false,
    },
    {
      label: '2',
      action: null,
      cell: 14,
      type: 'number',
      value: 2,
      isClicked: false,
    },
    {
      label: '3',
      action: null,
      cell: 15,
      type: 'number',
      value: 3,
      isClicked: false,
    },
    {
      label: '4',
      action: null,
      cell: 9,
      type: 'number',
      value: 4,
      isClicked: false,
    },
    {
      label: '5',
      action: null,
      cell: 10,
      type: 'number',
      value: 5,
      isClicked: false,
    },
    {
      label: '6',
      action: null,
      cell: 11,
      type: 'number',
      value: 6,
      isClicked: false,
    },
    {
      label: '7',
      action: null,
      cell: 5,
      type: 'number',
      value: 7,
      isClicked: false,
    },
    {
      label: '8',
      action: null,
      cell: 6,
      type: 'number',
      value: 8,
      isClicked: false,
    },
    {
      label: '9',
      action: null,
      cell: 7,
      type: 'number',
      value: 9,
      isClicked: false,
    },
  ]);

  const onButtonClick = ({ cell, value }) => {
    const changeButtonIsClicked = (isClicked) => {
      const buttonsCopy = buttons.slice();
      const button = buttonsCopy.find((but) => but.cell === cell);
      const buttonsWithoutClickedButton = buttonsCopy.filter((button) => button.cell !== cell);
      button.isClicked = isClicked;
      const newButtons = buttonsWithoutClickedButton.concat(button);
      changeButtons(newButtons);
    };
    changeButtonIsClicked(true);
    changeInputValue(`${input}${value}`);
    setTimeout(() => {
      changeButtonIsClicked(false);
    }, 250);
  };

  const onCleanButtonClick = () => {
    changeInputValue(``);
  };

  return (
    <Calculator
      {...props}
      buttons={buttons}
      onButtonClick={onButtonClick}
      onCleanButtonClick={onCleanButtonClick}
    />
  );
};

const mapStateToProps = (state) => ({
  input: state.calc.input,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => dispatch(actions.changeInputValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
