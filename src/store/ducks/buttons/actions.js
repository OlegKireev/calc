import types from './types';

export const setButtonIsClicked = (button) => ({
  type: types.SET_BUTTON_IS_CLICKED,
  payload: button,
});

export const setButtons = (buttons) => ({
  type: types.SET_BUTTONS,
  payload: buttons,
});
