import styled from 'styled-components';
import { colors } from '../../style';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  width: 75%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr
`;
