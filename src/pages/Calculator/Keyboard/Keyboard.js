import React from 'react';
import { Transition } from 'react-transition-group';
import classes from './Keyboard.module.scss';
import buttonClasses from './KeyboardButton/KeyboardButton.module.scss';
import KeyboardButton from './KeyboardButton/KeyboardButton';

const Keyboard = (props) => {
  const { buttons, onButtonClick } = props;

  const renderButtons = (buttonsArr) => {
    const sortedArr = buttonsArr.sort((a, b) => a.cell - b.cell);
    return sortedArr.map((button) => {
      const { label, type, isClicked, cell } = button;
      return (
        <Transition key={`${label}${cell}`} in={isClicked} timeout={{ enter: 250 }}>
          {(state) => (
            <KeyboardButton
              className={buttonClasses[state]}
              type={type}
              isClicked={isClicked}
              onClick={onButtonClick.bind(null, button)}
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
