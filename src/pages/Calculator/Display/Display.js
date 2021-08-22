import React from 'react';
import classes from './Display.module.scss';

const Display = ({ input, mathquill }) => {
  return (
    <div className={classes.Display}>
      <span className={classes.Mathquill}>{mathquill}</span>
      <span className={classes.Input}>{input}</span>
    </div>
  );
};
export default Display;
