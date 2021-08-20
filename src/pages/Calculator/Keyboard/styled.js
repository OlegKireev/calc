import styled from 'styled-components';
import { Button } from '../../../components/Button/index';
import { buttonClick } from '../../../styles/animations';

export const StyledKeyboard = styled.div`
  padding: 1rem;
  background-color: var(--color-white);
  height: 70%;
  transform: translate3d(0, 0, 0);
`;

export const Grid = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  gap: 10px;
  height: 100%;
`;

export const KeyboardButton = styled(Button)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 1.25rem;
  background-color: var(--color-white);
  transition: 0.15s all ease;
  z-index: auto;

  &:hover {
    background-color: var(--color-gray);
  }

  &::before {
    animation: ${buttonClick} 1s linear forwards;
    animation-play-state: ${(props) => (props.isClicked ? 'running' : 'paused')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    transform: scale(0.95);

    background-image: radial-gradient(transparent 55%, var(--color-purple) 70%);
    border-radius: 50%;
  }
`;

export const ActionButton = styled(KeyboardButton)`
  color: var(--color-purple);
`;

export const ResultButton = styled(KeyboardButton)`
  background-color: var(--color-purple);
  color: var(--color-white);
`;
