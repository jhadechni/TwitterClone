import styled from "styled-components";
import { LIGHT_BLUE } from '../../utils';

export const NabVarContainer = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
  }
`;

export const Twitterlogo = styled.img`
`;

export const ButtonLightBlue = styled.button`
  cursor: pointer;
  background-color: ${LIGHT_BLUE};
  padding: 15px;
  border: none;
  width: 207px;
  height: 50px;
  font-size: 16px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
`;
