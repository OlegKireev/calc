import React from 'react';
import { StyledDisplay } from './styled';

export const Display = (props) => <StyledDisplay {...props}>{props.children}</StyledDisplay>;
