import styled from 'styled-components';
import { colors } from '../../../style';

export const CardContainer = styled.div`
  padding: 7px;
`;

export const Cardbody = styled.div`
  background-color: ${colors.white};
  border-radius: 7px;
  width: 100%;
  display: flex;
`;

export const Text = styled.p`
  color: ${colors.black};
  font-family: 'Roboto';
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
`;
