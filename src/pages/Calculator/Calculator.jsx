import React from 'react';
import Display from './Display/Display';
import Keyboard from './Keyboard/Keyboard';
import classes from './Calculator.module.scss';

const Calculator = ({ buttons, changeButtons }) => {
  return (
    <div className={classes.Calculator}>
      <div>
        <Display>display</Display>
        <Keyboard buttons={buttons} changeButtons={changeButtons}>
          keyboard
        </Keyboard>
      </div>
    </div>
  );
};

export default Calculator;
