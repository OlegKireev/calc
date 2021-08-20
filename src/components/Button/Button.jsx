import React from 'react';
import classes from './Button.module.scss';

export const Button = ({ children, type, className, onClick }) => {
  const cls = [classes.Button, ...className.split(' ')];
  return (
    <button className={cls.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};
