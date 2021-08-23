import types from './types';

export const setButtonIsClicked = (params) => ({
  type: types.SET_BUTTON_IS_CLICKED,
  payload: params,
});

export const setButtons = (buttons) => ({
  type: types.SET_BUTTONS,
  payload: buttons,
});
