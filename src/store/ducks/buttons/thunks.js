import { setButtonIsClicked } from './actions';

export const toggleButtonIsClicked = (button) => (dispatch) => {
  dispatch(setButtonIsClicked(button));
  setTimeout(() => {
    dispatch(setButtonIsClicked(button));
  }, 250);
};
