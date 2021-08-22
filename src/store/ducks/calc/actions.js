import types from './types';

const changeInputValue = (value) => {
  return {
    type: types.CHANGE_INPUT_VALUE,
    payload: value,
  };
};

const actions = {
  changeInputValue,
};

export default actions;
