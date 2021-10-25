import styled from 'styled-components';
import { LIGHT_BLUE, WHITE } from '../../components/utils';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  @media (max-width: 1200px) {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const LogoContainer = styled.div`
  display: grid;
  place-items: center;
  background: ${LIGHT_BLUE};
  width: 100%;
  height: 100vh;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${WHITE};
  border: 1px solid ${LIGHT_BLUE};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px;
  width: 347px;
  height: 50px;
  color: ${LIGHT_BLUE};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
export const Space = styled.div`
  margin-top: 35px;
`;

export const Img = styled.img`
  width: ${(props) => (props.primary ? '300px' : '60px')};
  height: ${(props) => (props.primary ? '300px' : '60px')};
`;
