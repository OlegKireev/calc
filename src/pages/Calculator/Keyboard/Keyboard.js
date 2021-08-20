import React from 'react';
import { Transition } from 'react-transition-group';
import { Grid, StyledKeyboard, KeyboardButton, ActionButton, ResultButton } from './styled';

export const Keyboard = (props) => {
  const { buttons, changeButtons } = props;

  const renderButtons = (buttonsArr) => {
    const sortedArr = buttonsArr.sort((a, b) => a.cell - b.cell);
    return sortedArr.map(({ label, action, type, isClicked, cell }) => {
      let ButtonComponent = KeyboardButton;
      if (type === 'action') ButtonComponent = ActionButton;
      if (type === 'result') ButtonComponent = ResultButton;

      const onButtonClick = (isClicked) => {
        const buttonsCopy = buttons.slice();
        const button = buttonsCopy.find((but) => but.cell === cell);
        const buttonsWithoutClickedButton = buttonsCopy.filter((button) => button.cell !== cell);
        button.isClicked = true;
        const newButtons = buttonsWithoutClickedButton.concat(button);
        changeButtons(newButtons);
        setTimeout(() => {
          const buttonsCopy = buttons.slice();
          const button = buttonsCopy.find((but) => but.cell === cell);
          const buttonsWithoutClickedButton = buttonsCopy.filter((button) => button.cell !== cell);
          button.isClicked = false;
          const newButtons = buttonsWithoutClickedButton.concat(button);
          changeButtons(newButtons);
        }, 1000);
      };

      return (
        <Transition key={`${label}${cell}`} in={isClicked} timeout={200} classNames={'test'}>
          {(state) => (
            <ButtonComponent className={state} isClicked={isClicked} onClick={onButtonClick}>
              {label}
            </ButtonComponent>
          )}
        </Transition>
      );
    });
  };

  return (
    <StyledKeyboard {...props}>
      <Grid>{renderButtons(buttons)}</Grid>
    </StyledKeyboard>
  );
};
