import React from 'react';
import { StyledButton } from './styled';

export const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>;
