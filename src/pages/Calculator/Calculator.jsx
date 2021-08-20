import React from 'react';
import Display from './Display/Display';
import Keyboard from './Keyboard/Keyboard';
import classes from './Calculator.module.scss';

const Calculator = (props) => {
  const onScreenClick = (e) => {
    console.log(e.clientX, e.clientY);
  };

  return (
    <div className={classes.Calculator} onClick={onScreenClick}>
      <div>
        <Display>display</Display>
        <Keyboard {...props} />
      </div>
    </div>
  );
};

export default Calculator;
