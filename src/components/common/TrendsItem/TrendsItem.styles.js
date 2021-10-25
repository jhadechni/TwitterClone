import styled from 'styled-components';
import { GRAY } from '../../utils';

export const ContainerItem = styled.div`
  color: #000;
  padding-left: 10px;
  margin: 10px 0 10px 0;
`;

export const Trending = styled.p`
  color: ${GRAY};
  font-weight: 400;
  font-size: 12px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin: 5px 0 5px 0;
`;

export const Quantity = styled.p`
  color: ${GRAY};
  font-weight: 400;
  font-size: 12px;
  margin: 5px 0 5px 0;
`;

export const Line = styled.div`
  height: 1px;
  width: 95%;
  margin-bottom: 10px;
  background: #ddd;
`;

export const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
