import React from 'react';
import classes from './Display.module.scss';

const Display = (props) => <div className={classes.Display}>{props.children}</div>;

export default Display;
