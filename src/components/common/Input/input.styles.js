import styled from 'styled-components';
import { LIGHT_BLUE, WHITE } from '../../utils';

export const InputStyled = styled.input`
  background: ${WHITE};
  border: 1px solid ${LIGHT_BLUE};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px;
  width: 347px;
  height: 50px;
  color: ${LIGHT_BLUE};
  text-align: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${LIGHT_BLUE};
    text-align: center;
  }
  :-ms-input-placeholder {
    color: red;
  }
`;