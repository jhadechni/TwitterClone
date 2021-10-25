import styled from 'styled-components';
import { max_device } from '../../components/utils';
export const Root = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  /* padding-top: 30px; */
  display: flex;
  flex-direction: row;
  justify-items: center;
  height: 100%;
  @media ${max_device.lg} {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  @media ${max_device.lg} {
    display: none;
  }
`;

export const BoxContent = styled.div`
  /* height: 500px; */
  overflow: auto;
`;

export const Title = styled.h3`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-width: 0 1px 0 1px;
  margin: 0px 0 0 0;
  padding: 25px 0 15px 15px;
`;