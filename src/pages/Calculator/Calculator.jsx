import React, { useState } from 'react';
import Display from './Display/Display';
import Keyboard from './Keyboard/Keyboard';
import classes from './Calculator.module.scss';

const Calculator = (props) => {
  const [clickedCoords, changeClickedCoords] = useState([null, null, null]);

  const onScreenClick = (e) => {
    const THRESHOLD = 2;

    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (horizontal * THRESHOLD - THRESHOLD / 2).toFixed(2);
    const rotateY = (THRESHOLD / 2 - vertical * THRESHOLD).toFixed(2);

    changeClickedCoords([rotateX, rotateY, clientWidth]);
    setTimeout(() => {
      changeClickedCoords([0, 0, 0]);
    }, 150);
  };

  return (
    <div
      style={{
        transform: `perspective(${clickedCoords[2]}px) rotateX(${clickedCoords[1]}deg) rotateY(${clickedCoords[0]}deg) `,
      }}
      className={classes.Calculator}
      onClick={onScreenClick}>
      <div>
        <Display input={props.input} />
        <Keyboard {...props} />
      </div>
    </div>
  );
};

export default Calculator;
