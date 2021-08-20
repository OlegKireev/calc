import React from 'react';
import classes from './Button.module.scss';

export const Button = ({ children, type, className }) => {
  const cls = [classes.Button, ...className.split(' ')];
  return <button className={cls.join(' ')}>{children}</button>;
};
