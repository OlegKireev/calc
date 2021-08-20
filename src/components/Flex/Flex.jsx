import React from 'react';
import { StyledFlex } from './styled';

export const Flex = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};
