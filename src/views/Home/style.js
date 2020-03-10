import styled from 'styled-components';
import { colors } from '../../style';

export const Container = styled.div`
  height: 100vh;
  background-color: ${colors.darkGray};
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 75%;
  max-width: 1140px;
  margin: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr
`;
