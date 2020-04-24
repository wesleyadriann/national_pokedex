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
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 7px;
`;

export const ButtonWithArrow = styled.div`
  background-color: ${colors.darkGray};
  width: 40px;
  height: 40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 25px;
  height: 25px;
  transform: rotate(${(props) => (props.rigth ? '180deg' : '0deg')})
`;
