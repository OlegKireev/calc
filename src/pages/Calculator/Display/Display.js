import React from 'react';
import classes from './Display.module.scss';

const Display = (props) => {
  return (
    <div className={classes.Display}>
      <span className={classes.Mathquill}>2+2</span>
      <span className={classes.Input}>{props.input}</span>
    </div>
  );
};
export default Display;
