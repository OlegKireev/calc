import React from 'react';
import { Button } from '../../../../components/Button/Button';
import classes from './KeyboardButton.module.scss';

const KeyboardButton = ({ className = '', label, type, isClicked, onClick }) => {
  const cls = [classes.KeyboardButton, ...className.split(' ')];
  if (type === 'action') cls.push(classes.action);
  if (type === 'result') cls.push(classes.result);

  return (
    <Button className={cls.join(' ')} type={type} isClicked={isClicked} onClick={onClick}>
      {label}
    </Button>
  );
};

export default KeyboardButton;
