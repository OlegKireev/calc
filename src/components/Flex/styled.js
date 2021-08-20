import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-direction: ${(props) => props.direction || 'row'};
`;
