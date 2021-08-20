import React from 'react';
import { Button } from '../../../../components/Button/Button';
import classes from './KeyboardButton.module.scss';

const KeyboardButton = ({ label, type, isClicked, onButtonClick }) => {
  const cls = [classes.KeyboardButton];
  if (type === 'action') cls.push(classes.action);
  if (type === 'result') cls.push(classes.result);

  return (
    <Button className={cls.join(' ')} type={type} isClicked={isClicked} onClick={onButtonClick}>
      {label}
    </Button>
  );
};

export default KeyboardButton;
