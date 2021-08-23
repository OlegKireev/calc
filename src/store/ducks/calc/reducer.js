import types from './types';

const initialState = {
  input: '',
  mathquill: '',
  valueA: null,
  valueB: null,
  operand: null,
  result: null,
  buttons: [
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
  ],
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
