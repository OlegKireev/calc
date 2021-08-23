import types from './types';

const initialState = {
  buttons: [
    {
      id: 1,
      label: 'C',
      action: 'clean',
      cell: 1,
      type: 'action',
      isClicked: false,
    },
    {
      id: 2,
      label: '+/-',
      action: null,
      cell: 2,
      type: 'action',
      isClicked: false,
    },
    {
      id: 3,
      label: '%',
      action: null,
      cell: 3,
      type: 'action',
      isClicked: false,
    },
    {
      id: 4,
      label: '/',
      action: null,
      cell: 4,
      type: 'action',
      isClicked: false,
    },
    {
      id: 5,
      label: 'x',
      action: null,
      cell: 8,
      type: 'action',
      isClicked: false,
    },
    {
      id: 6,
      label: '-',
      action: null,
      cell: 12,
      type: 'action',
      isClicked: false,
    },
    {
      id: 7,
      label: '+',
      action: null,
      cell: 16,
      type: 'action',
      value: '+',
      isClicked: false,
    },
    {
      id: 8,
      label: '<',
      action: 'backspace',
      cell: 19,
      type: 'action',
      isClicked: false,
    },
    {
      id: 9,
      label: '=',
      action: null,
      cell: 20,
      type: 'result',
      isClicked: false,
    },
    {
      id: 10,
      label: '.',
      action: 'number',
      cell: 18,
      type: 'number',
      isClicked: false,
    },
    {
      id: 11,
      label: '0',
      action: 'number',
      cell: 17,
      type: 'number',
      value: 0,
      isClicked: false,
    },
    {
      id: 12,
      label: '1',
      action: 'number',
      cell: 13,
      type: 'number',
      value: 1,
      isClicked: false,
    },
    {
      id: 13,
      label: '2',
      action: 'number',
      cell: 14,
      type: 'number',
      value: 2,
      isClicked: false,
    },
    {
      id: 14,
      label: '3',
      action: 'number',
      cell: 15,
      type: 'number',
      value: 3,
      isClicked: false,
    },
    {
      id: 15,
      label: '4',
      action: 'number',
      cell: 9,
      type: 'number',
      value: 4,
      isClicked: false,
    },
    {
      id: 16,
      label: '5',
      action: 'number',
      cell: 10,
      type: 'number',
      value: 5,
      isClicked: false,
    },
    {
      id: 17,
      label: '6',
      action: 'number',
      cell: 11,
      type: 'number',
      value: 6,
      isClicked: false,
    },
    {
      id: 18,
      label: '7',
      action: 'number',
      cell: 5,
      type: 'number',
      value: 7,
      isClicked: false,
    },
    {
      id: 19,
      label: '8',
      action: 'number',
      cell: 6,
      type: 'number',
      value: 8,
      isClicked: false,
    },
    {
      id: 20,
      label: '9',
      action: 'number',
      cell: 7,
      type: 'number',
      value: 9,
      isClicked: false,
    },
  ],
};

const buttonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BUTTONS:
      return {
        ...state,
        buttons: action.payload,
      };
    case types.SET_BUTTON_IS_CLICKED:
      const buttonsCopy = state.buttons.slice();
      const button = buttonsCopy.find((but) => but.id === action.payload.id);
      const buttonsWithoutClickedButton = buttonsCopy.filter(
        (button) => button.id !== action.payload.id
      );
      button.isClicked = !button.isClicked;
      const newButtons = buttonsWithoutClickedButton.concat(button);

      return {
        ...state,
        buttons: newButtons,
      };
    default:
      return state;
  }
};

export default buttonsReducer;
