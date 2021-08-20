import React from 'react';
import { Container } from './styled';
import { Flex } from '../../components/Flex/index';
import { Display } from './Display/index';
import { Keyboard } from './Keyboard/index';

export const Calculator = () => (
  <Container>
    <Flex direction="column">
      <Display>display</Display>
      <Keyboard>keyboard</Keyboard>
    </Flex>
  </Container>
);
