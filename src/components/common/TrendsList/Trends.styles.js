import styled from 'styled-components';
import { LIGHT_GRAY, LIGHT_BLUE, SOFT_GRAY } from '../../utils';
import { Link } from 'react-router-dom';
export const ContainerTrend = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

export const Container = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  background-color: #f6f8fa;
  border-radius: 20px;
  width: 300px;
`;

export const Icon = styled.img`
  fill: ${LIGHT_GRAY};
  width: ${(props) => props.primary && '15px'};
  height: ${(props) => props.primary && '15px'};
  margin: ${(props) => props.primary && '0px 7px 0px 0px'};
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: ${SOFT_GRAY};
  padding: 12px 10px 12px 10px;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 20px;
  width: 280px;
`;

export const Input = styled.input`
  border: none;
  background-color: ${SOFT_GRAY};
  font-size: 15px;
  font-weight: normal;
`;

export const Title = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Head = styled.div`
  display: flex;
  margin-bottom: 5px;
  justify-content: center;
`;

export const MoreTrend = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const Text = styled.h5`
  margin: 6px 0 16px 0;
  font-weight: 500;

  color: ${LIGHT_BLUE};
`;