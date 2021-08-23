import React from 'react';
import classes from './Display.module.scss';

const Display = ({ input, mathquill, operator, result }) => {
  let displayedValue = input;
  if (result) displayedValue = result;
  if (result === 0) displayedValue = 0;

  return (
    <div className={classes.Display}>
      <span className={classes.Mathquill}>{mathquill}</span>
      <span className={classes.Input}>{displayedValue}</span>
    </div>
  );
};
export default Display;
