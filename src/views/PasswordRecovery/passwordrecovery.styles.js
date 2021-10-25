import styled from 'styled-components';
import { GRAY, LIGHT_BLUE } from '../../components/utils';

export const Label = styled.label`
  color: ${(props) => (props.primary ? LIGHT_BLUE : GRAY)};
  text-align: ${(props) => (props.align ? 'center' : 'none')};
  margin-bottom: ${(props) => (props.spaceBottom ? '15px' : '0')};
`;
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;