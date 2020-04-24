import styled from 'styled-components';
import { colors } from '../../../style';

export const CardContainer = styled.div`
  padding: 7px;
`;

export const Cardbody = styled.div`
  background-color: ${colors.darkGray};
  border-radius: 7px;
  width: 100%;
  min-height: 96px;
  display: flex;
`;

export const Text = styled.p`
  color: ${colors.white};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 3px 0;
  font-size: ${(props) => (props.size ? `${props.size}px` : 'initial')}
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TypeBadge = styled.span`
  background-color: ${(props) => colors[props.type]};
  color: ${colors.white};
  padding: .25em .4em;
  border-radius: .25em;
  font-size: 75%;
  text-transform: capitalize;
  margin-right: 3px;
  font-weight: bold;
`;
