import React from 'react';
import { Transition } from 'react-transition-group';
import classes from './Keyboard.module.scss';
import buttonClasses from './KeyboardButton/KeyboardButton.module.scss';
import KeyboardButton from './KeyboardButton/KeyboardButton';

const Keyboard = (props) => {
  const { buttons, changeButtons } = props;

  const renderButtons = (buttonsArr) => {
    const sortedArr = buttonsArr.sort((a, b) => a.cell - b.cell);
    return sortedArr.map(({ label, action, type, isClicked, cell }) => {
      const onButtonClick = (value) => {
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
        }, 250);
      };

      return (
        <Transition key={`${label}${cell}`} in={isClicked} timeout={{ enter: 250 }}>
          {(state) => (
            <KeyboardButton
              className={buttonClasses[state]}
              type={type}
              isClicked={isClicked}
              onClick={onButtonClick}
              label={label}
            />
          )}
        </Transition>
      );
    });
  };

  return (
    <div className={classes.Keyboard}>
      <div className={classes.Grid}>{renderButtons(buttons)}</div>
    </div>
  );
};

export default Keyboard;
