import { keyframes } from 'styled-components';

export const buttonClick = keyframes`
  from {
    opacity: 0.3;
    transform: scale(0.95);
  }

  to {
    opacity: 0;
    transform: scale(1.25);
  }
`;
