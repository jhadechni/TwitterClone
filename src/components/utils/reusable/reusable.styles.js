import styled from 'styled-components';
import { GRAY, LIGHT_GRAY, LIGHT_BLUE, DIMMED_GRAY, BLACK } from './colors';
import { Link as Linked } from 'react-router-dom';

export const GrayText = styled.p`
  color: ${(props) => (props.dimmed ? `${DIMMED_GRAY}` : `${DIMMED_GRAY}`)};
  text-align: ${(props) => (props.align ? 'center' : 'none')};
  margin-bottom: ${(props) => (props.margin_bottom ? '15px' : 'none')};
  margin: ${(props) => (props.margin ? '0px 5px 0px 5px' : 'none')};
  margin-top: ${(props) => (props.margin_top ? '15px' : 'none')};
  font-weight: ${(props) => props.light && '400'};
`;
export const BlackText = styled.p`
  color: ${(props) => (props.dimmed ? `${BLACK}` : `${BLACK}`)};
  text-align: ${(props) => (props.align ? 'center' : 'none')};
  margin-bottom: ${(props) => (props.margin_bottom ? '15px' : 'none')};
  margin: ${(props) => (props.margin ? '0px 5px 0px 5px' : 'none')};
  margin-top: ${(props) => (props.margin_top ? '15px' : 'none')};
  font-weight: ${(props) => props.light && '400'};
`;
export const LightText = styled.span`
  color: ${LIGHT_BLUE};
  padding-top : 20px;
  padding-bottom : 20px;
`;

export const Title = styled.h2`
  margin: 0 0 15px 0;
  text-align: start;
`;

export const Label = styled.label`
  color: ${(props) => (props.primary ? LIGHT_BLUE : GRAY)};
  text-align: ${(props) => (props.align ? 'center' : 'none')};
  margin-bottom: ${(props) => (props.spaceBottom ? '15px' : '0')};
  padding-bottom: 10px;
`;

export const Link = styled(Linked)`
  text-decoration: none;
  text-align: ${(props) => (props.align ? 'center' : 'none')};
  margin-bottom: ${(props) => (props.spaceBottom ? '15px' : '0')};
  padding-bottom: 15px;
`;

export const ButtonLightBlue = styled.button`
  cursor: pointer;
  background-color: ${LIGHT_BLUE};
  padding: 15px;
  border: none;
  width: 347px;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

export const Input = styled.input`
  border: 1px solid ${LIGHT_GRAY};
  padding: 15px;
  border-radius: 5px;
  margin: 5px 0 10px 0;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: column;
`;
